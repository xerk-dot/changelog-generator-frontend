import React from 'react';

export const MarkdownComponents = {
    p: ({ children }) => (
        <p style={{ marginBottom: '1.5em', paddingLeft: '1.5rem' }}>{children}</p> // Indent normal text
    ),
    h1: ({ children }) => (
        <h1 style={{ marginBottom: '1em' }}>{children}</h1>
    ),
    h2: ({ children }) => (
        <h2 style={{ marginBottom: '0.75em' }}>{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 style={{ marginBottom: '0.5em' }}>{children}</h3>
    ),
    code: ({ children }) => (
        <pre style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)', padding: '1em', paddingLeft: '1.5rem', marginBottom: '1.5em' }}>
            <code>{children}</code>
        </pre>
    ),
}; 