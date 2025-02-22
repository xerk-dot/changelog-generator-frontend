# changelog generator




https://github.com/user-attachments/assets/2cf6f2a4-1188-4bd5-b6d7-1fef0d546b12


___

# what is this repo?

i received a [technical assessment](https://greptile.notion.site/Greptile-Software-Engineer-Interview-Project-5f64dde912614a43983a8dae539f5bea).

the task:

```
The task is to build an AI-powered changelog generator. 

The challenge with writing changelogs is twofold:

1. You have to go through a few days of commits to make a list of everything that’s changed
2. You have to summarize the changes that would be relevant to an end-user in a few bullet points.

The submission should have two parts:

1. A developer-facing tool that allows devs to quickly AI-generate a changelog.
2. A simple public-facing website where the changelog appears for people to see.

In your README, feel free to share why you made the technical and product decisions that you made! 

The submission will be evaluated on the following criteria:

- Does it work?
- Does the backend logic make sense?
- Is there evidence of user-centered product design choices?
- Is it pretty (simple and minimal can be beautiful)?
- How is the UX from the developer’s perspective? How easy is it now for them to write a changelog?

```

### lets break down the deliverables and their interactions

1. we need to fetch (only the) commits from a GitHub repository
2. to keep this straight-forward, both the frontend and developer tool will run the same file which generates a changelog from the commits
3. we need to save the changelog to a (markdown? json?) file in the next.js app directory, which the frontend will read from
4. i want the frontend to be next.js, so we will make the developer tool compatible with (node)JS/TS
5. implied requirement: ability to select a range of commits to use for the changelog. instructions imply a date range, but i want to allow the user to select the last N commits.

## how do i use this?

For the frontend:
```
pnpm i
pnpm dev
open http://localhost:2004

```

For the developer tool:
```
    node cli.js
```
___
## notes on development

hmm. lets conceptualize the core functionality first. as a developer, what should be expected from a changelog?

### let's research into current implementations





there are many non-AI implementations, from [git-cliff](https://github.com/orhun/git-cliff) to [git-journal](https://github.com/saschagrunert/git-journal) to [clog-cli](https://github.com/clog-tool/clog-cli) to [git-chglog](https://github.com/git-chglog/git-chglog) to [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog). ill try them all to determine a good feature set.

### what should be on the changelog? how is it structured/syntaxed?

[common-changelog.org](https://github.com/vweevers/common-changelog) has a list of implementations, and a specification for how a changelog should be formatted. so does [keepachangelog.com](https://keepachangelog.com/en/1.1.0/).   


[commit-lint](https://github.com/conventional-changelog/commitlint) and [semantic-release](https://github.com/semantic-release/semantic-release) are tools that can enforce these conventions and automate the generation of changelogs based on commit messages.

Due to the nature of the project, I will designate the following change types:
- ADDED: for new features
- CHANGED: for updates to existing functionality
- DEPRECATED: for features that will be removed in the future
- REMOVED: for features that have been removed
- FIXED: for bug fixes
- SECURITY: for security improvements


### what about commits should be considered when generating the changelog?

1. Commit Message: The commit message is the most significant part of a commit. It should clearly describe the changes made, providing context and rationale. A well-written commit message helps in understanding the purpose of the change and can guide the summarization process for the changelog.
2. Date of Commit: The date associated with each commit is essential for chronological organization in the changelog. It allows users to see when changes were made, which can be particularly important for tracking the evolution of a project over time and understanding the timeline of feature releases or bug fixes.
3. Author Information: While the identity of the author may not be critical for the changelog itself, it can provide insight into who contributed to specific changes. This can be useful for accountability and recognizing contributions, especially in collaborative projects.
4. Files Changed: Knowing which files were modified in a commit can help in understanding the scope of the changes. This information can be summarized in the changelog to highlight significant updates or areas of the codebase that have been affected.
5. Commit Hash: The unique identifier for each commit (the commit hash) is valuable for linking back to the specific changes in the version control system. Including this in the changelog allows users to easily reference the exact commit for more detailed information.
6. Change Type: Categorizing commits into types (e.g., added, changed, deprecated, removed, fixed, security) helps in structuring the changelog. This categorization allows users to quickly identify the nature of changes and prioritize their reading based on their interests or needs.
7. Contextual Information: Additional context, such as related issues or pull requests, can enhance the understanding of the changes. This information can be included in the changelog to provide a more comprehensive view of the development process.


### how should the user specify/select the commits?

The instructions imply 'a few days of commits'. I will cap the number of commits at 20.

However, I will also interpret the instructions as 'a few days of commits' from today. I will allow the user to select the last N commits from the current date.

In a more fleshed-out product, the user could possibly want:
- to select the last N commits, without a specified date range
- to select a date range, without a commit count
- to select a commit hash
- to select a branch
- to select a tag
- to select a release

### let's make frontend decisions

- monospace font, as the app is predominantly a text-based app
- solely a landing page, with a changelog and a settings section
- the changelog (and the about section) will format the markdown with react-markdown. 
- it is critical that the changelog looks stunning and there are no syntax errors.

### let's make backend decisions

#### fetching from github
- use octokit to fetch the commits from github
- handle invalid user inputs
- handle rate limiting
- handle errors
- handle pagination
- allow the user to select a range of commits to use for the changelog. instructions imply a date range, but i want to allow the user to select the last N commits.

####  generating the changelog
- use chatGPT to generate the changelog
- structured output to guide the format of the changelog.
- generate summaries of the commits, make sure to include diff and files changed
- use the summaries to group the commits by date and then change type.
- for each version/date, generate a description of the changes that were made.
- when generating the markdown, group the changes by change type, such that all are grouped under the same subsubheader.
- make sure links to the commits are included in the schema and eventual markdown.

#### displaying to the frontend
- in the `cli.js` file, you can release to prod by running `vc --prod`
- the changelog will be saved to the `app/changelog.md` file
- the frontend will read from the `app/changelog.md` file


## future improvements 

- instead of a few days of commits (and instead of a few weeks/months of commits), we could determine the significance of the commits and use that to generate the changelog.
- we could save previous changelogs to the `app/changelogs` directory, and allow the user to select a previous changelog to view.
- we could allow for download of the changelog in markdown, html, and pdf formats.
- we could allow for the changelog to be generated in a different tone, such as a more/less formal/verbose style.
