'use server';

import React from 'react';
import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';
import Hero from '@components/Hero';
import ChangelogSettings from './components/ChangelogSettings'; // Adjust the import path as necessary
import CustomCarousel from './components/CustomCarousel';
import ChangelogDisplay from './components/ChangelogDisplay';

const Page = () => {
    const initialRepoUrl = ''; // Fetch or set this value as needed
    const initialCommitOption = 5; // Default value

    return (
        <div style={{ position: 'relative' }}>

            <CustomCarousel />
            
            <Hero word="(CHANGE)LOG" isHalfHeight={true} isBlinkingAtEnd={true}></Hero>
            <ChangelogDisplay />
            <ChangelogSettings
                initialRepoUrl={initialRepoUrl}
                initialCommitOption={initialCommitOption}
            />
        </div>
    );
};

export default Page;