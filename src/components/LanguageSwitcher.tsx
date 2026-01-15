import React, { useState, useTransition } from 'react';
import { Button, Menu, MenuItem, Box, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { Locales, LocalesType } from '../i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    const __ = useTranslations("layout");
    const [isPending, startTransition] = useTransition();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lang: LocalesType) => {
        if (lang === currentLocale) return;

        // Construye la nueva ruta manteniendo la página actual
        const newPathname = pathname.replace(new RegExp(`^(/${currentLocale}|/$)`, "i"), `/${lang}`);

        startTransition(() => {
            router.replace(newPathname);
            router.refresh(); // opcional: fuerza recarga suave si hay datos dinámicos
        });
    };

    return (
        <Box>
            <Tooltip title={__("select-language")} arrow>
                <Button
                    color="inherit"
                    startIcon={<LanguageIcon />}
                    onClick={handleClick}
                    aria-controls="language-menu"
                    aria-haspopup="true"
                >
                    {currentLocale.toUpperCase()}
                </Button>
            </Tooltip>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {currentLocale && (() => {
                    const components: React.ReactNode[] = [];
                    for(const locale in Locales) {
                        if(locale !== currentLocale) {
                            components.push(
                                <MenuItem key={locale} onClick={() => changeLanguage(locale as LocalesType)}>
                                    {Locales[locale as keyof (typeof Locales)]} ({locale.toUpperCase()})
                                </MenuItem>
                            );
                        }
                    }

                    return components;
                })()}
            </Menu>
        </Box>
    );
};

export default LanguageSwitcher;