'use client';
import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import Accordion from '@components/Accordion';
import ActionBar from '@components/ActionBar';
import ActionButton from '@components/ActionButton';
import ActionListItem from '@components/ActionListItem-updated';
import AlertBanner from '@components/AlertBanner';
import Avatar from '@components/Avatar';
import Badge from '@components/Badge';
import BarLoader from '@components/BarLoader';
import BarProgress from '@components/BarProgress';
import Block from '@components/Block';
import BlockLoader from '@components/BlockLoader';
import Breadcrumbs from '@components/BreadCrumbs';
import Button from '@components/Button';
import ButtonGroup from '@components/ButtonGroup';
import CanvasPlatformer from '@components/CanvasPlatformer';
import CanvasSnake from '@components/CanvasSnake';
import Card from '@components/Card';
import CardDouble from '@components/CardDouble';
import Checkbox from '@components/Checkbox';
import ContentFluid from '@components/ContentFluid';
import DataTable from '@components/DataTable';
import DatePicker from '@components/DatePicker';
import DebugGrid from '@components/DebugGrid';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import Divider from '@components/Divider';
import Drawer from '@components/Drawer';
import DropdownMenuTrigger from '@components/DropdownMenuTrigger';
import Grid from '@components/Grid';
import Indent from '@components/Indent';
import Input from '@components/Input';
import IntDevLogo from '@components/svg/IntDevLogo';
import ListItem from '@components/ListItem';
import MatrixLoader from '@components/MatrixLoader';
import Message from '@components/Message';
import MessageViewer from '@components/MessageViewer';
import ModalAlert from '@components/modals/ModalAlert';
import ModalCreateAccount from '@components/modals/ModalCreateAccount';
import ModalError from '@components/modals/ModalError';
import ModalStack from '@components/ModalStack';
import ModalTrigger from '@components/ModalTrigger';
import NumberRangeSlider from '@components/NumberRangeSlider';
import Package from '@root/package.json';
import PopoverTrigger from '@components/PopoverTrigger';
import RadioButtonGroup from '@components/RadioButtonGroup';
import Row from '@components/Row';
import RowSpaceBetween from '@components/RowSpaceBetween';
import Script from 'next/script';
import Text from '@components/Text';
import TextArea from '@components/TextArea';
import TooltipTrigger from '@components/TooltipTrigger';
import TreeView from '@components/TreeView';
import UpdatingDataTable from '@components/examples/UpdatingDataTable';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navigation from '@components/Navigation_updated';
import { lazy, Suspense, useState } from 'react';
import { ModalProvider } from '@components/page/ModalContext';
import ResponsiveTextDisplay from '@components/ResponsiveTextDisplay';
import SubtitleHeader from '@components/SubtitleHeader';
import { data } from 'app/_info/info';
import { useMediaQuery } from './hooks/useMediaQuery';
import styles from './page.module.css';
import { SuperimposedHero } from '@components/superimposed-hero/superimposed-hero';
import CodeBlock from '@components/CodeBlock';
import SidebarLayout from '@components/SidebarLayout';
import Link from 'next/link';

const Carousel = lazy(() =>
  import('@components/carousel/carousel').then(module => ({ default: module.Carousel }))
);

export default function Page() {
    const [repoUrl, setRepoUrl] = useState<string>(''); // State to hold the input value
    const [errorMessage, setErrorMessage] = useState<string>(''); // State for error message
    const [successMessage, setSuccessMessage] = useState<string>(''); // State for success message
    const [isLoading, setIsLoading] = useState<boolean>(false); // State to track loading status

    const handleGenerate = async () => {
        setIsLoading(true); // Set loading status to true when button is pressed
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
        } catch (error) {
            console.error('Error in API route:', error);
            setErrorMessage('Failed to generate changelog. 2'); // Set error message for display
        }
        setIsLoading(false); // Reset loading status after API call
    };

    return (
        <div>
            <Hero word="(CHANGE)LOG" isHalfHeight={true}></Hero>
            <Card title="generate changelog" maxWidth="70vw" centered>
                <Input
                    type="text"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/vercel/ai.git"
                    label="Repository URL"
            />
            <Button onClick={handleGenerate}>Generate Changelog</Button>
            </Card>
            {(!errorMessage && !successMessage && isLoading) && <BarLoader intervalRate={100} />}

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
}