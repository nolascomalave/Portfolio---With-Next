'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';
import MobileNavButton from './MobileNavButton';
import { li as Li, div as Div, ul as Ul, nav as Nav } from "motion/react-client";
import { AnimatePresence } from 'framer-motion';
import { useNav } from '@/context/NavContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type LinkType = {
    href: string;
    label: string;
    key: string;
    isHomeAnchor?: boolean;
}

const menuVariants = {
    closed: {
        display: "none",
        opacity: 0,
        y: "-12.5%"
        // Si quieres slide + fade: x: "100%",
    },
    open: {
        display: "flex",
        opacity: 1,
        y: 0
        // x: 0,
    },
};

const blurBackdropVariants = {
    open: {
        height: "100lvh",
        width: "100vw",
    },
    closed: {
        height: "auto",
        width: "auto",
    }
};

const handleActionMenu = ({
    e,
    sectionID,
    isOpenMobileMenu,
    setIsOpenMobileMenu
}: {
    e: {preventDefault: () => void};
    sectionID: string;
    isOpenMobileMenu: boolean;
    setIsOpenMobileMenu: (val: boolean) => void
}) => {
    e.preventDefault();

    const element = document.getElementById(sectionID);

    if (element) {
        if(isOpenMobileMenu) {
            setIsOpenMobileMenu(false);
        }

        setTimeout(() => element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',     // o 'center' si quieres centrar la sección
        }), 0);
    }

    window.history.replaceState(null, "", `#${sectionID}`);
}

const renderLinks = ({
    link,
    activeSection,
    __,
    isOpenMobileMenu,
    setIsOpenMobileMenu
}: {
    link: LinkType,
    activeSection: string,
    __: (val: string) => string,
    isOpenMobileMenu: boolean;
    setIsOpenMobileMenu: (val: boolean) => void;
}) => {
    const isHomeAnchor = (link.isHomeAnchor ?? false) === true,
        sectionID = (isHomeAnchor ? HomeAnchorID : link.href.slice(1)),
        isActive = activeSection === sectionID;

    return (
        <Li key={link.href} className="relative pb-1">
            <Link
                href={isHomeAnchor ? `#${HomeAnchorID}` : link.href}
                className={`p-2 ${isActive ? "text-dark-purple dark:text-neon-green font-semibold" : ""}`}
                onClick={(e) => handleActionMenu({
                    e: e,
                    sectionID: sectionID,
                    isOpenMobileMenu: isOpenMobileMenu,
                    setIsOpenMobileMenu: setIsOpenMobileMenu
                })}
            >
                {__(link.label)}
            </Link>
            {isActive && (
                <Div
                    layoutId="activeIndicator" // ¡Magia! Comparte la animación entre items
                    className="absolute left-0 right-0 h-0.5 bg-dark-purple dark:bg-neon-green rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
            )}
        </Li>
    )
}

const navLinks: LinkType[] = [
  { href: '#home_anchor', label: 'home', key: 'home', isHomeAnchor: true },
  { href: '#about', label: 'about', key: 'about' },
  { href: '#experience', label: 'experience', key: 'experience' },
  { href: '#contact', label: 'contact', key: 'contact' },
];

export const HomeAnchorID = "home";

export default function Navbar() {
  const __ = useTranslations('layout.sections-list');
  const navRef = useRef<HTMLElement>(null);
  const { activeSection } = useNav();
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const isMobileMenu = useMediaQuery("(min-width: 40rem)");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenu && isOpenMobileMenu) {
        setIsOpenMobileMenu(false);
    }
  }, [isMobileMenu]);

  if (!mounted) return null;

  return (
    <>
        <Nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
            ref={navRef}
            className="sticky top-0 left-0 right-0 z-20 transition-colors flex gap-[0.125rem] text-inherit z-[1000]"
        >
            <AnimatePresence>
                <Div
                    className="backdrop-blur-md absolute z-1 top-0 right-0 bottom-0 left-0"
                    animate={isOpenMobileMenu ? "open" : "closed"}
                    initial="closed"
                    variants={blurBackdropVariants}
                    transition={{ duration: isOpenMobileMenu ? 0.2 : 0.4, ease: 'easeInOut' }}
                />
            </AnimatePresence>
            {/* <div className={`backdrop-blur-md absolute z-1 top-0 right-0 ${isOpenMobileMenu ? "w-lvw h-lvh" : "bottom-0 left-0"}`}></div> */}
            <div className='flex p-[0.5rem] max-w-7xl w-full m-auto justify-between z-2'>
                <div className="flex items-center shrink-0">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={`#${HomeAnchorID}`}
                                onClick={(e) => handleActionMenu({
                                    e: e,
                                    sectionID: HomeAnchorID,
                                    isOpenMobileMenu: isOpenMobileMenu,
                                    setIsOpenMobileMenu: setIsOpenMobileMenu
                                })}
                            >
                                <Image
                                    src="/favicon.svg"
                                    width={0}
                                    height={0}
                                    alt="Logo"
                                    style={{
                                        width: '2rem',
                                        height: '2rem',
                                        objectPosition: 'center',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className="TooltipContent z-[1000]">
                            {__("home")}
                        </TooltipContent>
                    </Tooltip>
                </div>

                <AnimatePresence>
                    <Ul
                        animate={isOpenMobileMenu ? "open" : "closed"}
                        initial="closed"
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        variants={menuVariants}
                        className='absolute w-lvw flex flex-col text-2xl gap-8 left-0 items-center justify-center'
                        style={{
                            top: `calc(0px + ${!navRef.current ? 0 : navRef.current.offsetHeight}px)`,
                            height: `calc(100lvh - ${!navRef.current ? 0 : navRef.current.offsetHeight}px)`,
                        }}
                    >
                        {navLinks.map(link => renderLinks({
                            link,
                            activeSection,
                            __,
                            isOpenMobileMenu,
                            setIsOpenMobileMenu
                        }))}
                    </Ul>
                </AnimatePresence>

                <ul
                    className="hidden sm:flex grow list-none items-center justify-center gap-0.5"
                >
                    {navLinks.map(link => renderLinks({
                        link,
                        activeSection,
                        __,
                        isOpenMobileMenu,
                        setIsOpenMobileMenu
                    }))}
                </ul>

                <div className='flex items-center gap-2 shrink-0'>
                    <AnimatedThemeToggler className='cursor-pointer' />
                    <LanguageSwitcher/>
                    <MobileNavButton setIsOpen={setIsOpenMobileMenu} isOpen={isOpenMobileMenu} />
                </div>
            </div>
        </Nav>
    </>
  );
}