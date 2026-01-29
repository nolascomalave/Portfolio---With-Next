import React, { useTransition } from 'react';
import { Locales, LocalesType } from '../i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

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
                    <Button className="bg-transparent cursor-pointer hover:bg-transparent text-inherit [&_svg]:size-6" onClick={e => triggerReff.current?.click()}>
                        <Globe />
                        {currentLocale.toUpperCase()}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" style={{zIndex: 1000}}>
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