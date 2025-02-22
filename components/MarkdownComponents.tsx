import React from 'react';

export const MarkdownComponents = {
    p: ({ children }) => (
        <p style={{ marginBottom: '1em', paddingLeft: '1.5rem' }}>{children}</p> // Indent normal text
    ),
    h1: ({ children }) => (
        <h1 style={{ marginBottom: '1em' }}>{children}</h1>
    ),
    h2: ({ children }) => (
        <h2 style={{ marginTop: '2em', marginBottom: '0.75em' }}>{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 style={{ marginTop: '1em', marginBottom: '0.5em', paddingLeft: '1.5rem' }}>{children}</h3>
    ),
    // ... existing code ...
    code: ({ children }) => {
        const codeString = String(children).trim();
        
        // Debugging: Log the original code string
        console.log("Original code string:", codeString);
        
        // Check if the code string is wrapped in triple backticks
        if (codeString.startsWith('```') && codeString.endsWith('```')) {
            const codeContent = codeString.slice(3, -3).trim(); // Remove the backticks
            const lines = codeContent.split('\n'); // Split into lines
            
            // Debugging: Log the lines after splitting
            console.log("Lines after splitting:", lines);
            
            // Find the minimum indentation level
            const minIndentation = Math.min(...lines.map(line => line.search(/\S/))); // Get the index of the first non-whitespace character
            
            // Debugging: Log the minimum indentation level
            console.log("Minimum indentation level:", minIndentation);
            
            // Remove the minimum indentation from each line
            const formattedCode = lines
                .map(line => line.slice(minIndentation)) // Remove leading whitespace
                .join('\n'); // Join lines back together
            
            // Debugging: Log the formatted code
            console.log("Formatted code:", formattedCode);
            
            return (
                <pre style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)', padding: '1em', marginBottom: '.5em' }}>
                    <code>{formattedCode}</code>
                </pre>
            );
        }
        
        // If it's wrapped in single backticks, italicize the text
        if (codeString.startsWith('`') && codeString.endsWith('`')) {
            return <em>{codeString.slice(1, -1)}</em>; // Ensure single backticks are handled correctly
        }
        
        return codeString; // Ensure single backticks are handled correctly
    },
    pre: ({ children }) => (
        <pre style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)', padding: '1em', paddingLeft: '1.5rem', marginBottom: '.5em' }}>
            {children}
        </pre>
    ),
    li: ({ children }) => (
        <li style={{ paddingLeft: '2.5rem', marginBottom: '0.5em' }}>{children}</li>
    ),
    hr: () => (
        <hr style={{ marginTop: '2.5em' }} /> // Add margin above and below horizontal lines
    ),


}; 