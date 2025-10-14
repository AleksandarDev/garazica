/* eslint-disable jsx-a11y/anchor-is-valid */
import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import AreaItem from '../components/Areas/AreaItem';
import CoverImageDay from '../design/cover/CoverDay.svg';
import CoverImageNight from '../design/cover/CoverNight.svg';
import areas from '../src/Areas';
import styles from '../styles/index.module.scss';

const Home = () => {
    const { resolvedTheme } = useTheme();
    
    useEffect(() => {
        setTimeout(() => {
            const fadeGroup = document.getElementById('FadeGroup');
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

    const isDark = resolvedTheme === 'dark';
    const CoverImage = isDark ? CoverImageNight : CoverImageDay;

    return (
        <>
            <div className={styles.coverImageContainer} ref={coverImageRef}>
                <CoverImage />
            </div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="my-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {areas.map((area) => (
                            <div key={area.id}>
                                <AreaItem area={area} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
