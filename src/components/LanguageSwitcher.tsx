import React, { useState, useTransition } from 'react';
// import { Button, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { Locales, LocalesType } from '../i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
// import { Button } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
    const triggerReff = React.useRef<HTMLButtonElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    const __ = useTranslations("layout");
    const [isPending, startTransition] = useTransition();

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
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild ref={triggerReff}>
                    <Button className="bg-transparent cursor-pointer hover:bg-transparent text-inherit" onClick={e => triggerReff.current?.click()}>
                        <LanguageIcon className="h-5 w-5" />
                        {currentLocale.toUpperCase()}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuLabel>{__("select-language")}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    {currentLocale && (() => {
                        const components: React.ReactNode[] = [];
                        for(const locale in Locales) {
                            if(locale !== currentLocale) {
                                components.push(
                                    <DropdownMenuItem key={locale} onSelect={() => changeLanguage(locale as LocalesType)}>
                                        {Locales[locale as keyof (typeof Locales)]} ({locale.toUpperCase()})
                                    </DropdownMenuItem>
                                );
                            }
                        }

                        return components;
                    })()}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default LanguageSwitcher;