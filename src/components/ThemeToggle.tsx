'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslations } from 'next-intl';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const __ = useTranslations("common");

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // evita mismatch server/client

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button size="icon" className="rounded-full bg-transparent cursor-pointer hover:bg-transparent" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    {theme === 'dark' ? (
                        <LightModeIcon className="h-5 w-5 text-yellow-400" />
                    ) : (
                        <DarkModeIcon className="h-5 w-5" style={{color: "#2196f3"}} />
                    )}
                </Button>
            </TooltipTrigger>
            <TooltipContent className="TooltipContent">
                <p>{__('theme-mode', { theme: __(`theme.${theme}`).toLowerCase() })}</p>
            </TooltipContent>
        </Tooltip>
    );
}