'use client';

import React, { useState, Suspense } from 'react';
import { Carousel } from '@components/carousel/carousel'; // Adjust the import path as necessary
import styles from '../page.module.css';
import { lazy } from 'react';
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
const LazyCarousel = lazy(() =>
    import('@components/carousel/carousel').then(module => ({ default: module.Carousel }))
);


export default function CustomCarousel() {
    return (
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
    );
}