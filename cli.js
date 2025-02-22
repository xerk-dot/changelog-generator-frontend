// cli.js
import { exec } from 'child_process';
import readline from 'readline';

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define a default repository URL
const defaultRepoURL = 'https://github.com/NVIDIA/cutlass.git';

// Prompt the user for the repository URL
rl.question('Please enter the repository URL (or press Enter to use the default: ' + defaultRepoURL + '): ', (repoURL) => {
    // Use the default URL if no input is provided
    if (!repoURL) {
        console.log(`No repository URL provided. Using default: ${defaultRepoURL}`);
        repoURL = defaultRepoURL;
    }

    // Construct the command to execute
    const command = `node generateChangelog.js "${repoURL}"`;

    // Execute the command
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        // Output the result
        console.log(`Output:\n${stdout}`);
    });

    // Close the readline interface
    rl.close();
});