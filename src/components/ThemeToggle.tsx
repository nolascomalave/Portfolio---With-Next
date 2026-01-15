'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const __ = useTranslations("common");

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // evita mismatch server/client

    return (
        <IconButton
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
        >
            <Tooltip title={__('theme-mode', { theme: __(`theme.${theme}`).toLowerCase() })} arrow>
                {theme === 'dark' ? (
                    <LightModeIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                    <DarkModeIcon className="h-5 w-5" style={{color: "#2196f3"}} />
                )}
            </Tooltip>
        </IconButton>
    );
}