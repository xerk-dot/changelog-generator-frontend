// generateChangelog.js
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai'); // Import OpenAI library
const axios = require('axios'); // Import axios for HTTP requests
require('dotenv').config();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY}); // Initialize OpenAI client

// Function to generate changelog
async function generateChangelog(repoUrl) {
    const commits = await fetchCommits(repoUrl); // Fetch all commits from the repository
    const changelogEntries = commits.map((commit, index) => {
        const commitNumber = (index + 1).toString().padStart(4, '0'); // Format the number to 000X
        return `- ${commitNumber}: ${commit.commit.message} (by ${commit.commit.author.name})`; // Include the number in the entry
    }).join('\n'); // Format commits

    // Call OpenAI API to summarize the changes
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-2024-08-06",
            messages: [
                { role: "system", content: "You are a helpful changelog generator. Summarize the following commit messages." },
                { role: "user", content: `Here are the commit messages:\n${changelogEntries}` },
            ],
        });

        const generatedChangelog = completion.choices[0].message.content; // Extract the generated changelog

        const changelog = `
# Changelog

## [1.0.0] - ${new Date().toISOString().split('T')[0]} // Update this version and date accordingly
_First release._

### Added
${generatedChangelog} // Updated to include commit messages
        `;
        return changelog;
    } catch (error) {
        console.error('Error from OpenAI API:', error.response ? error.response.data : error.message);
        throw new Error('Failed to generate changelog from OpenAI API.');
    }
}

// Function to fetch all commits from the GitHub repository
async function fetchCommits(repoUrl) {
    const urlParts = repoUrl.split('/');
    const owner = urlParts[urlParts.length - 2]; // Extract owner
    const repo = urlParts[urlParts.length - 1].replace('.git', ''); // Extract repo name

    const allCommits = [];
    let page = 1;
    let perPage = 100; // Number of commits per page
    let response;

    do {
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}&page=${page}`;
        response = await axios.get(apiUrl); // Make a GET request to the GitHub API
        allCommits.push(...response.data); // Add the fetched commits to the allCommits array
        page++; // Increment the page number
    } while (response.data.length > 0); // Continue until no more commits are returned

    return allCommits; // Return all fetched commits
}

// Function to save changelog to a file
function saveChangelog(changelog) {
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

generateChangelog(repoUrl)
    .then(saveChangelog)
    .catch(error => {
        console.error('Error generating changelog:', error);
    });