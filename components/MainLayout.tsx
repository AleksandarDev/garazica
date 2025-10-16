import Link from 'next/link';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import AppSettingsService from '../src/AppSettingsService';

// Simple icon components to replace Material-UI icons
const DayIcon = () => (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const NightIcon = () => (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [logoSource, setLogoSource] = useState('/icons/icon-128x128.png');

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && resolvedTheme) {
            const isDark = resolvedTheme === 'dark';
            const newLogoSource = isDark ? '/icons/LogoDark-256x256.png' : '/icons/icon-128x128.png';
            setLogoSource(newLogoSource);
            AppSettingsService.setIsNightMode(isDark);
        }
    }, [mounted, resolvedTheme]);

    const handleSwitchTheme = () => {
        if (mounted) {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        }
    };

    const isDark = mounted && resolvedTheme === 'dark';

    return (
        <>
            <header className="bg-transparent">
                <div className="flex items-center justify-between gap-2 p-4">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <img src={logoSource} height={42} width={42} alt="Cover" />
                        </Link>
                        <Link href="/areas" className="text-lg px-4 py-2 hover:opacity-80">
                            Istraži
                        </Link>
                        <Link href="/book" className="text-lg px-4 py-2 hover:opacity-80">
                            Upute
                        </Link>
                    </div>
                    <button
                        onClick={handleSwitchTheme}
                        title="Toggle day/night mode"
                        className="p-2 hover:opacity-80"
                        aria-label="Toggle theme"
                    >
                        {mounted && (isDark ? <NightIcon /> : <DayIcon />)}
                    </button>
                </div>
            </header>
            {children}
        </>
    );
};

export default MainLayout;
