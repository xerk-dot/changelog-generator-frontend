'use client';

import ReactMarkdown from 'react-markdown';
import { MarkdownComponents } from '@root/components/MarkdownComponents';
import { useEffect, useState } from 'react';
import Card from '@components/Card';
export default function ChangelogDisplay() {
    const [changelog, setChangelog] = useState('');

    //fetch changelog.md when the component is mounted
    useEffect(() => {
        const fetchChangelog = async () => {
            const response = await fetch('/changelog.md');
            const text = await response.text();
            setChangelog(text);
        };
        fetchChangelog();
    }, []);
    return (
        <Card title="sample" centered maxWidth="85vw" color='rgba(128, 128, 128, 0.6)'>  
            <div className="prose prose-lg">
                <ReactMarkdown components={MarkdownComponents}>{changelog}</ReactMarkdown>
            </div>
        </Card>
    );
}