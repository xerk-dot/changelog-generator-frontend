// app/api/generateChangelog/route.js
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export async function POST(req) {
    const { url } = await req.json();

    if (!url) {
        return new Response(JSON.stringify({ error: 'Repository URL is required.' }), { status: 400 });
    }

    try {
        // Execute the Node.js tool with the provided URL
        await execPromise(`node generateChangelog.js "${url}"`);
        return new Response(JSON.stringify({ message: 'Changelog generated successfully.' }), { status: 200 });
    } catch (error) {
        console.error('Error generating changelog:', error.message); // Log the error message
        return new Response(JSON.stringify({ error: 'Failed to generate changelog. 1' }), { status: 500 });
    }
}