// cli.js
import { spawn } from 'child_process';
import readline from 'readline';

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Handle Ctrl + C to exit gracefully
process.on('SIGINT', () => {
    console.log('\nExiting the process...');
    rl.close(); // Close the readline interface
    process.exit(0); // Exit the process
});

// Define a default repository URL
const defaultRepoURL = 'https://github.com/NVIDIA/cutlass.git';
let repoURL; // Declare repoURL in the outer scope
let numberOfCommits; // Declare numberOfCommits in the outer scope

// Prompt the user for the repository URL
rl.question('Repository URL or .git (or press Enter to use the default: ' + defaultRepoURL + '): ', (inputRepoURL) => {
    const urlPattern = /^(https?:\/\/[^\s]+\.git|git@.*\.git|https?:\/\/github\.com\/[^\s]+)$/; // Updated regex to allow GitHub URLs
    if (!inputRepoURL) {
        console.log(`No repository URL provided. Using default: ${defaultRepoURL}`);
        repoURL = defaultRepoURL;
    } else if (urlPattern.test(inputRepoURL)) {
        repoURL = inputRepoURL; // Assign the input to repoURL
    } else {
        console.log('Invalid repository URL. Please provide a valid URL or a .git repository.');
        rl.close(); // Close readline interface on invalid input
        return; // Exit the function
    }

    rl.question('Use default settings for commit selection? (last 10 commits) (Y/n):', (defaultSettings) => {
        if (defaultSettings === 'Y' || defaultSettings === 'y' || defaultSettings === '') {
            numberOfCommits = 10;
            proceedWithChangelog(); // Call the function to proceed
        } else {
            rl.question('Number of commits to fetch (default: 10): ', (input) => {
                if (input && !isNaN(input)) {
                    numberOfCommits = parseInt(input, 10);
                } else {
                    console.log('Invalid input. Using default: 10');
                    numberOfCommits = 10; // Default value
                }
                proceedWithChangelog(); // Call the function to proceed
            });
        }
    });
});

// Function to proceed with changelog generation
function proceedWithChangelog() {
    // Execute the command with streaming output using spawn
    const changelogProcess = spawn('node', ['generateChangelog.js', repoURL, numberOfCommits], { stdio: 'inherit' });

    changelogProcess.on('error', (error) => {
        console.error(`Error executing generateChangelog command: ${error.message}`);
    });

    changelogProcess.on('exit', (code) => {
        if (code !== 0) {
            console.error(`generateChangelog process exited with code: ${code}`);
        } else {
            // Now ask the second question after the first command has finished
            rl.question('Release to the public-facing next.js site (vc --prod)? (Y/n): ', (updateWebsite) => {
                if (updateWebsite === 'Y' || updateWebsite === 'y' || updateWebsite === '') {
                    // Execute the vc command with streaming output using spawn
                    const vcProcess = spawn('vc', ['--prod'], { stdio: 'inherit' });

                    vcProcess.on('error', (vcError) => {
                        console.error(`Error executing vc command: ${vcError.message}`);
                        rl.close(); // Close readline interface on error
                    });

                    vcProcess.on('exit', (vcCode) => {
                        if (vcCode !== 0) {
                            console.error(`vc process exited with code: ${vcCode}`);
                        }
                        rl.close(); // Close readline interface after completion
                    });
                } else {
                    rl.close(); // Close readline interface if user chooses not to update
                }
            });
        }
    });
}
