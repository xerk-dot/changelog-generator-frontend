# changelog

___
# PART I

## what is this?

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
3. we need to save the changelog to a file in the next.js app directory, which the frontend will read from
4. i want the frontend to be next.js, so we will make the developer tool compatible with JS/TS



___
## PART II


hmm. lets conceptualize the core functionality first. as a developer, what should be expected from a changelog?

### let's research into current implementations

[keepachangelog.com](https://keepachangelog.com/en/1.1.0/) has some nice literature on defining a changelog.

there are many non-AI implementations, from [git-cliff](https://github.com/orhun/git-cliff) to [git-journal](https://github.com/saschagrunert/git-journal) to [clog-cli](https://github.com/clog-tool/clog-cli) to [git-chglog](https://github.com/git-chglog/git-chglog) to [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog). ill try them all to determine a good feature set.

### what should be on the changelog? how is it structured/syntaxed?



### let's make frontend decisions

-> monospace font, as the app is predominantly a text-based app
-> 


### let's make backend decisions

If you want to fetch commits from a GitHub repository, you can use the node-fetch library to make API calls.