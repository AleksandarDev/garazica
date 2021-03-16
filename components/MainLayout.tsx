import {
    Box, Button, Divider, IconButton, Toolbar
} from '@material-ui/core';
import Link from 'next/link';
import NightIcon from '@material-ui/icons/Brightness3';
import AppBar from '@material-ui/core/AppBar';
import DayIcon from '@material-ui/icons/WbSunny';
import React from 'react';
import AppSettingsService from '../src/AppSettingsService';

const MainLayout = ({ onThemeChange, children }: {
    onThemeChange: () => void, children: React.ReactNode
}) => {
    const isDark = AppSettingsService.getIsNightMode();
    const logoSource = isDark ? '/icons/LogoDark-256x256.png' : '/icons/icon-128x128.png';

    const handleSwitchTheme = () => {
        if (onThemeChange != null) { onThemeChange(); }
    };

    return (
        <>
            <header>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Box pr={3}>
                            <Link href="/" passHref>
                                <a href="/">
                                    <img src={logoSource} height={42} width={42} alt="Cover" />
                                </a>
                            </Link>
                        </Box>
                        <Link href="/areas" passHref>
                            <Button size="large">Istraži</Button>
                        </Link>
                        <Link href="/book" passHref>
                            <Button size="large">Upute</Button>
                        </Link>
                        <div style={{ flexGrow: 1 }} />
                        <IconButton
                            onClick={handleSwitchTheme}
                            title="Toggle day/night mode"
                        >
                            {isDark ? <NightIcon /> : <DayIcon />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </header>
            {children}
        </>
    );
};

export default MainLayout;
