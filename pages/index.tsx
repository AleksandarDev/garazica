/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, NoSsr } from '@material-ui/core';
import DayIcon from '@material-ui/icons/WbSunny';
import NightIcon from '@material-ui/icons/Brightness3';
import CoverImageNight from '../design/cover/CoverNight.svg';
import CoverImageDay from '../design/cover/CoverDay.svg';
import AppSettingsService from '../src/AppSettingsService';

import styles from '../styles/index.module.scss';

export default function Home({ onThemeChange }: any): React.ReactElement {
  useEffect(() => {
    setTimeout(() => {
      const fadeGroup = document.getElementById('FadeGroup');
      anime({
        targets: fadeGroup,
        opacity: 0.3,
        easing: 'easeInOutSine',
        duration: 3000,
      });
    }, 1000);
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
      svgs[0].setAttribute('style', `width: ${newWidth}px; height: ${newHeight}px;`);
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
  const logoSource = isDark ? '/icons/LogoDark-256x256.png' : '/icons/icon-128x128.png';

  const handleSwitchTheme = () => {
    if (onThemeChange != null) { onThemeChange(); }
  };

  return (
    <>
      <AppBar position="static" color="transparent" component="header">
        <Toolbar>
          <Link href="/">
            <a className={styles.title}>
              <NoSsr>
                <img src={logoSource} height={42} width={42} alt="Cover" />
              </NoSsr>
            </a>
          </Link>
          <IconButton
            className={styles.themeToggleButton}
            onClick={handleSwitchTheme}
            title="Toggle day/night mode"
          >
            <NoSsr>
              {isDark ? <NightIcon /> : <DayIcon />}
            </NoSsr>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={styles.coverImageContainer} ref={coverImageRef}>
        <NoSsr>
          <CoverImage />
        </NoSsr>
      </div>
    </>
  );
}
