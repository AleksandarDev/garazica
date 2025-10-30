'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import AppSettingsService from '../src/AppSettingsService';

export default function ThemeLogo() {
    const { resolvedTheme } = useTheme();
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

    if (!mounted) {
        return <img src="/icons/icon-128x128.png" height={42} width={42} alt="Cover" />;
    }

    return <img src={logoSource} height={42} width={42} alt="Cover" />;
}
