import React from 'react';
import fs from 'fs';
import path from 'path';
import Card from '@components/Card';
import '@root/global.scss';
import ReactMarkdown from 'react-markdown';
import { MarkdownComponents } from '@root/components/MarkdownComponents';
const About: React.FC = async () => {
    // Read the README.md file directly
    const filePath = path.join(process.cwd(), 'README.md'); // Adjust the path to your README.md file
    const readmeContent = fs.readFileSync(filePath, 'utf-8');
    
    const markdownContent = (
        <ReactMarkdown components={MarkdownComponents}>
            {readmeContent}
        </ReactMarkdown>
    );

    return (
        <Card title="About This Project" centered maxWidth="70vw" color='rgba(128, 128, 128, 0.3)'>
            {markdownContent}
        </Card>
    );
};

export default About;