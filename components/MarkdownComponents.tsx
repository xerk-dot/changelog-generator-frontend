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
        
        // Check if the code string is wrapped in triple backticks
        if (codeString.startsWith('```') && codeString.endsWith('```')) {
            return (
                <pre style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)', padding: '1em', paddingLeft: '1.5rem', marginBottom: '.5em' }}>
                    <code>{codeString.slice(0, -3).trim()}</code>
                </pre>
            );
        }
        
        // If it's wrapped in single backticks, italicize the text
        return <em>{codeString.slice(1, -1)}</em>;
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