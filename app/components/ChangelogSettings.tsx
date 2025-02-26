'use client'; // Mark this file as a client component

import React, { useState } from 'react';
import Badge from '@components/Badge';
import Button from '@components/Button';
import Input from '@components/Input';
import RadioButtonGroup from '@components/RadioButtonGroup';
import DatePicker from '@components/DatePicker';
import Card from '@components/Card';

interface ChangelogSettingsProps {
    initialRepoUrl: string;
    initialCommitOption: number;
}

const ChangelogSettings: React.FC<ChangelogSettingsProps> = ({
    initialRepoUrl,
    initialCommitOption,
}) => {
    const [repoUrl, setRepoUrl] = useState<string>(initialRepoUrl);
    const [branch, setBranch] = useState<string>('master');
    const [tag, setTag] = useState<string>('');
    const [release, setRelease] = useState<string>('');
    const [commitHash, setCommitHash] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [commitOption, setCommitOption] = useState<number>(initialCommitOption);

    const handleGenerate = async () => {
        setIsLoading(true);
        if (!repoUrl) {
            setErrorMessage('Repository URL is required.');
            setIsLoading(false);
            return;
        }

        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await fetch('/api/generateChangelog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: repoUrl }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error from API:', errorData);
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setSuccessMessage(data.message);

            const changelogResponse = await fetch('/changelog.md');
            if (!changelogResponse.ok) {
                throw new Error('Failed to fetch changelog');
            }
            const changelogText = await changelogResponse.text();
            // Handle the changelog text as needed
        } catch (error) {
            console.error('Error in API route:', error);
            setErrorMessage('Failed to generate changelog.');
        }
        setIsLoading(false);
    };

    return (
        <Card                 title="a (sample)" 
        maxWidth="70vw" 
        centered
        color="var(--theme-button-background)">
            <Input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="ex: https://github.com/NVIDIA/cutlass"
                label="Repository URL"
                redAsterisk={true}
            />
            <br />            
         

            <Badge isAllCaps={false}>When should the last commit be? (unselected will default to today)</Badge>
            <RadioButtonGroup
                defaultValue={commitOption.toString()}
                onChange={(value) => setCommitOption(Number(value))}
                options={[
                    { value: '1', label: 'All Commits' },
                    { value: '2', label: 'Custom Range' }
                ]}
                tabCount={3}
            />
            {commitOption === 2 && (
                <DatePicker year={2025} month={2} />
            )}
            <br />
            <Input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="ex: 10"
                label="How many commits should be used for the changelog?"
                redAsterisk={true}
            />
            <br />   
            <Input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="ex: master"
                label="Select only commits of this branch (unselected will default to master)"
            />
            <br />
            <Input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="ex: Greptile"
                label="Select only commits of this tag (unselected will default to any)"
            />
            <br />
            <Input
                type="text"
                value={release}
                onChange={(e) => setRelease(e.target.value)}
                placeholder="ex: v1.0.0"
                label="Select only commits of this release (unselected will default to any)"
            />
            <br />
            <Input
                type="text"
                value={commitHash}
                onChange={(e) => setCommitHash(e.target.value)}
                placeholder="ex: a3c1e2f4b5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0"
                label="Select only commits of this commit hash (unselected will default to any)"
            />


            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <br />
            <Button isDisabled={isLoading} onClick={handleGenerate}>Generate Your Own Changelog</Button>
        </Card>
    );
};

export default ChangelogSettings;