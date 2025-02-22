import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { Octokit } from "octokit";

dotenv.config();

const octokit = new Octokit({ 
    auth: process.env.GITHUB_TOKEN
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION,
    project: process.env.OPENAI_PROJECT
});

const ChangeType = {
    ADDED: 'added',
    CHANGED: 'changed',
    DEPRECATED: 'deprecated',
    REMOVED: 'removed',
    FIXED: 'fixed',
    SECURITY: 'security'
};
const ChangeDescription = z.object({
    thingsChanged: z.array(z.string()),
    githubCommitURL: z.array(z.string())
});
const Changes = z.object({
    type: z.nativeEnum(ChangeType),
    description: ChangeDescription
});

const Version = z.object({
    dateOfThisVersion: z.string(),
    oneToTwoSentenceDescription: z.string(),
    changesAssociatedWithThisVersion: z.array(Changes)
});
const ChangelogGenerator = z.object({
    versions: z.array(Version)
});

async function generateChangelog(commits, repoUrl) {
    const commitsJson = JSON.stringify(commits, null, 2);
    
    try { // Call OpenAI API to summarize the changes
        const completion = await openai.beta.chat.completions.parse({
            model: "gpt-4o-2024-08-06",
            messages: [
                { role: "system", content: `Given the git commits, generate a changelog in the format of a common changelog.org file. All gits that share the same date should be grouped together into the same version. The repository is: ${repoUrl}` },
                { role: "user", content: commitsJson }
            ],
            max_tokens: 3000,
            response_format: zodResponseFormat(ChangelogGenerator, "changelog_generator")
        });
        const generatedChangelog = completion.choices[0].message.parsed;
        const jsonString = JSON.stringify(generatedChangelog, null, 2);
        const formattedChangelog = generatedChangelog.versions.map(version => {
            const oneToTwoSentenceDescription = `## ${version.dateOfThisVersion}\n${version.oneToTwoSentenceDescription}`;
            const changeItems = [];
            const groupedChanges = {};

            // Group changes by type
            version.changesAssociatedWithThisVersion.forEach(change => {
                const type = change.type;
                if (!groupedChanges[type]) {
                    groupedChanges[type] = { items: [], urls: [] }; // Store items and URLs separately
                }
                groupedChanges[type].items.push(...change.description.thingsChanged);
                groupedChanges[type].urls.push(...change.description.githubCommitURL);
            });

            // Format the grouped changes
            for (const [type, { items, urls }] of Object.entries(groupedChanges)) {
                changeItems.push(`### ${type.charAt(0).toUpperCase() + type.slice(1)}\n${items.map(item => `- ${item}`).join('\n')}\n${urls.map(url => `([View Commit](${url.replace(/\.git/g, '')}))`).join(' ')}`);
            }
            
            const changesList = changeItems.join('\n');
            return `${oneToTwoSentenceDescription}\n${changesList}`;
        }).join('\n\n');

        const changelog = `

        
# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project does adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

${formattedChangelog}
        `;

        return changelog;
    } catch (error) {
        console.error('Error from OpenAI API:', error.response ? error.response.data : error.message);
        throw new Error('Failed to generate changelog from OpenAI API.');
    }
}

// Function to fetch all commits from the GitHub repository with additional details
async function fetchCommits(repoUrl) {
    if (typeof repoUrl !== 'string') {
        throw new Error('Invalid repository URL. It must be a string.');
    }

    const urlParts = repoUrl.split('/');
    const owner = urlParts[urlParts.length - 2]; // Extract owner
    const repo = urlParts[urlParts.length - 1].replace('.git', ''); // Extract repo name

    const allCommits = [];
    let page = 1;
    const perPage = 10; // Set to 10 to fetch only the last 10 commits
    let response;

    do {
        console.log(`Fetching page ${page} of commits...`);
        response = await octokit.rest.repos.listCommits({
            owner,
            repo,
            per_page: perPage,
            page: page
        });

        console.log(`Fetched ${response.data.length} commits from GitHub.`);

        for (const commit of response.data) {
            const commitDetails = await octokit.rest.repos.getCommit({
                owner,
                repo,
                ref: commit.sha
            });
            const commitInfo = {
                sha: commitDetails.data.sha,
                author: commitDetails.data.commit.author.name,
                message: commitDetails.data.commit.message,
                timestampOfCommit: commitDetails.data.commit.author.date,
                files: commitDetails.data.files.map(file => ({
                    filename: file.filename,
                    status: file.status,
                    changes: file.changes
                })),
                diffs: commitDetails.data.files.map(file => file.patch).join('\n') // Combine diffs into a single string
            };

            console.log(`Processing commit: ${commitInfo.sha}`);
            //console.log(`Commit message: ${commitInfo.message}`);
            //console.log(`Diffs: ${commitInfo.diffs}`);

            // Summarize the commit using OpenAI
            try {
                const summaryResponse = await openai.chat.completions.create({
                    model: "gpt-4",
                    messages: [
                        { role: "system", content: "Summarize the commit messages and diffs. Be objective and detailed. Don't speak in first person." },
                        { role: "user", content: `Summarize the following commit:\n\nMessage: ${commitInfo.message}\nDiff:\n${commitInfo.diffs}` }
                    ],
                    max_tokens: 1000 // Adjust as needed
                });

                // Check if the response structure is as expected
                if (summaryResponse && summaryResponse.choices && summaryResponse.choices.length > 0) {
                    commitInfo.summary = summaryResponse.choices[0].message.content; // Store the summary
                    //console.log(`Summary for commit ${commitInfo.sha}: ${commitInfo.summary}`);
                } else {
                    console.error('Unexpected response structure from OpenAI API:', summaryResponse);
                    commitInfo.summary = "Summary not available"; // Handle as needed
                }
            } catch (summaryError) {
                console.error('Error summarizing commit:', commitInfo.sha, summaryError.message);
                commitInfo.summary = "Error generating summary"; // Handle as needed
            }
            delete commitInfo.diffs;
            delete commitInfo.files;
            allCommits.push(commitInfo);
        }
        page++;
    } while (response.data.length > 0 && allCommits.length < 1);

    //console.log(JSON.stringify(allCommits, null, 2)); // Print all commits with details
    console.log("Finished fetching commits. Total commits fetched: " + allCommits.length);
    return allCommits; // Return all fetched commits with details
}

// Function to save changelog to a file
function saveChangelog(changelog) {
    const __filename = new URL(import.meta.url).pathname; // Get the current file path
    const __dirname = path.dirname(__filename); // Get the directory name
    const filePath = path.join(__dirname, 'public', 'changelog.md');
    fs.writeFileSync(filePath, changelog);
    console.log('Changelog generated and saved to public/changelog.md');
}

// Main execution
const repoUrl = process.argv[2]; // Get the repository URL from command line arguments
if (!repoUrl) {
    console.error('Repository URL is required.');
    process.exit(1);
}

const commits = await fetchCommits(repoUrl);
saveChangelog(await generateChangelog(commits, repoUrl));