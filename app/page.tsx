'use client';
import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';
import Badge from '@components/Badge';
import BarLoader from '@components/BarLoader';

import Button from '@components/Button';
import Card from '@components/Card';
import DatePicker from '@components/DatePicker';
import Input from '@components/Input';
import NumberRangeSlider from '@components/NumberRangeSlider';
import RadioButtonGroup from '@components/RadioButtonGroup';
import Hero from '@components/Hero';
import { lazy, Suspense, useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { MarkdownComponents } from '@root/components/MarkdownComponents';
import { Carousel } from '@components/carousel/carousel';
import { getCurrentTheme } from '@common/utilities';

const LazyCarousel = lazy(() =>
    import('@components/carousel/carousel').then(module => ({ default: module.Carousel }))
);

const carouselImages = [
    {
        src: "https://picsum.photos/seed/1/1920/900",
        alt: "Placeholder image 1", 
    },
    {
        src: "https://picsum.photos/seed/13/1920/900",
        alt: "Placeholder image 13",
    },
    {
        src: "https://picsum.photos/seed/8/1920/900",
        alt: "Placeholder image 8",
    }
];

export default function Page() {
    const [repoUrl, setRepoUrl] = useState<string>(''); // State to hold the input value
    const [branch, setBranch] = useState<string>('master'); // State for branch input
    const [tag, setTag] = useState<string>(''); // New state for tag input
    const [release, setRelease] = useState<string>(''); // New state for release input
    const [commitHash, setCommitHash] = useState<string>(''); // New state for commit hash input
    const [errorMessage, setErrorMessage] = useState<string>(''); // State for error message
    const [successMessage, setSuccessMessage] = useState<string>(''); // State for success message
    const [isLoading, setIsLoading] = useState<boolean>(false); // State to track loading status
    const [changelog, setChangelog] = useState<string>(''); // State to hold changelog content
    const [commitOption, setCommitOption] = useState<number>(1); // Set to 2 for testing
    const [secondCommitOption, setSecondCommitOption] = useState<string>('one'); // State for the second button group
    const [currentTheme, setCurrentTheme] = useState<string>(''); // State to hold the current theme

    // Fetch changelog.md when the component mounts
    useEffect(() => {
        const fetchChangelog = async () => {
            try {
                const changelogResponse = await fetch('/changelog.md'); // Fetching from the public folder
                if (!changelogResponse.ok) {
                    throw new Error('Failed to fetch changelog');
                }
                const changelogText = await changelogResponse.text();
                setChangelog(changelogText); // Store the changelog content
            } catch (error) {
                console.error('Error fetching changelog:', error);
                setErrorMessage('Failed to load changelog.'); // Set error message for display
            }
        };

        fetchChangelog(); // Call the function to fetch the changelog
    }, []); // Empty dependency array to run only once on mount

    useEffect(() => {
        const theme = getCurrentTheme(); // Get the current theme from the utility function
        setCurrentTheme(theme); // Update the state with the current theme
    }, []); // Empty dependency array to run only once on mount

    const handleGenerate = async () => {
        setIsLoading(true); // Set loading status to true when button is pressed
        setCommitOption(1); // Ensure "All Commits" radio is selected

        if (!repoUrl) {
            setErrorMessage('Repository URL is required.'); // Set error message if input is empty
            setIsLoading(false); // Reset loading status after API call
            return;
        }
        
        setErrorMessage(''); // Clear error message if input is valid
        setSuccessMessage(''); // Clear previous success message

        // Make API call to the new API route
        try {
            const response = await fetch('/api/generateChangelog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: repoUrl }), // Send the URL string
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error from API:', errorData);
                throw new Error('Network response was not ok');
            }

            // Handle successful response
            const data = await response.json();
            console.log(data); // Process the response as needed
            setSuccessMessage(data.message); // Set success message for display

            // Fetch the changelog.md file from the public folder after it is generated
            const changelogResponse = await fetch('/changelog.md'); // Fetching from the public folder
            if (!changelogResponse.ok) {
                throw new Error('Failed to fetch changelog');
            }
            const changelogText = await changelogResponse.text();
            setChangelog(changelogText); // Store the changelog content

        } catch (error) {
            console.error('Error in API route:', error);
            setErrorMessage('Failed to generate changelog.'); // Set error message for display
        }
        setIsLoading(false); // Reset loading status after API call
    };
    const markdownContent = (
      <ReactMarkdown components={MarkdownComponents}>
          {changelog}
      </ReactMarkdown>
    );
    return (
        <div style={{ position: 'relative' }}>
      {(
        <div className={styles.mobileCarouselWrapper}>
          <Suspense fallback={null}>
            <Carousel
              placeholder="/bridge-gradient.png"
              images={carouselImages}
              width={1920}
              height={900}
              fadeBottom={true}
            />
          </Suspense>
        </div>
      )}
            <Hero word="(CHANGE)LOG" isHalfHeight={true} isBlinkingAtEnd={true}></Hero>
            <Card 
                title="a (sample)" 
                maxWidth="70vw" 
                centered
                color="var(--theme-button-background)"
            >
                {markdownContent}
            </Card>
            <Card title="settings" maxWidth="70vw" centered>
                <Input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="ex: https://github.com/NVIDIA/cutlass"
                    label="Repository URL"
                    redAsterisk={true}
                />
                <br />
                <Badge isAllCaps={false} redAsterisk={true}>How many commits should be used for the changelog?</Badge>

                <NumberRangeSlider min={0} max={20} value={commitOption}/>
                <br />
                <Badge isAllCaps={false}>When should the last commit be? (unselected will default to today)</Badge>
                <RadioButtonGroup
                    defaultValue={commitOption.toString()}
                    onChange={(value) => {
                        setCommitOption(Number(value));
                    }}
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
                <Button isDisabled={true} onClick={handleGenerate}>Generate Your Own Changelog</Button>
            </Card>
            {isLoading && <BarLoader intervalRate={1000} />}
        </div>
    );
}