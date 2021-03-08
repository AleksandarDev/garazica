/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Avatar, Box, Card, CardActionArea, CardContent,
    Container, Grid, NoSsr, Typography
} from '@material-ui/core';
import { Build, Computer, DeveloperBoard } from '@material-ui/icons';
import anime from 'animejs';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import CoverImageDay from '../design/cover/CoverDay.svg';
import CoverImageNight from '../design/cover/CoverNight.svg';
import AppSettingsService from '../src/AppSettingsService';
import styles from '../styles/index.module.scss';

interface ICategory {
  id: string,
  label: string,
  icon: React.ReactNode
}

const CategoryItem = ({ category }: { category: ICategory }) => (
    <Link href={`/areas/${category.id}`}>
        <Card className={styles.categoryContainer} variant="elevation" elevation={0}>
            <CardActionArea>
                <CardContent>
                    <Grid container spacing={2} wrap="nowrap" alignItems="center">
                        <Grid item>
                            <Avatar variant="square" className={styles.categoryAvatar}>{category.icon}</Avatar>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3">{category.label}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    </Link>
);

const Home = () => {
    useEffect(() => {
        setTimeout(() => {
            const fadeGroup = document.getElementById('FadeGroup');
            console.log('fade group', fadeGroup);
            anime({
                targets: fadeGroup,
                opacity: 0.3,
                easing: 'easeInOutSine',
                duration: 3000,
            });
        }, 2000);
    }, []);

    const coverImageRef = useRef<HTMLDivElement>(null);
    const invalidateCoverSize = () => {
        if (typeof window === 'undefined'
      || coverImageRef == null
      || coverImageRef.current == null) { return; }

        const newWidth = window.innerWidth;
        const newHeight = newWidth < 1200 ? 456 : (newWidth / 1920) * 730;
        const containerElement = coverImageRef?.current;
        let svgs = null;
        if (containerElement != null) {
            svgs = containerElement.getElementsByTagName('svg');
        }

        if (svgs != null && svgs.length > 0) {
            svgs[0].setAttribute('style', `width: ${newWidth}; height: ${newHeight}`);
            const newViewBoxWidth = Math.max(window.innerWidth, 720);
            svgs[0].setAttribute('viewBox', `${(1920 - newViewBoxWidth) / 2} 0 ${newViewBoxWidth} 730`);
        }
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', invalidateCoverSize);
        }
    }, []);

    if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(() => invalidateCoverSize());
    }

    const isDark = AppSettingsService.getIsNightMode();
    const CoverImage = isDark ? CoverImageNight : CoverImageDay;

    const categories: ICategory[] = [
        { id: 'electronics', label: 'Elektronika', icon: <DeveloperBoard /> },
        { id: 'computers', label: 'Računala', icon: <Computer /> },
        { id: 'tools', label: 'Alati', icon: <Build /> },
    ];

    return (
        <>
            <div className={styles.coverImageContainer} ref={coverImageRef}>
                <NoSsr>
                    <CoverImage />
                </NoSsr>
            </div>
            <Container fixed>
                <section>
                    <Box my={4}>
                        <Grid container spacing={2}>
                            {categories.map((category) => (
                                <Grid item key={category.id} xs={12} sm={4}>
                                    <CategoryItem category={category} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </section>
            </Container>
        </>
    );
};

export default Home;
