'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';
import MobileNavButton from './MobileNavButton';
import * as motion from "motion/react-client";
import { AnimatePresence } from 'framer-motion';
import { he } from 'zod/v4/locales';

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
        height: "100vh",
        width: "100vw",
    },
    closed: {
        height: "auto",
        width: "auto",
    }
}

export default function Navbar() {
  const __ = useTranslations('layout.sections-list');
  const navRef = useRef<HTMLElement>(null);
  // const pathname = usePathname();
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // const currentPath = pathname.replace(`/${locale}`, '') || '/';

  const navLinks = [
    { href: '/', label: __('home'), key: '/' },
    { href: '/about', label: __('about'), key: '/about' },
    { href: '/skills', label: __('skills'), key: '/skills' },
    { href: '/projects', label: __('projects'), key: '/projects' },
    { href: '/contact', label: __('contact'), key: '/contact' },
  ];

  // Encontrar el enlace activo
  // const activeLink = navLinks.find(link => currentPath === link.key) || navLinks[0];

  return (
    <>
        <nav ref={navRef} className="sticky top-0 left-0 right-0 z-50 transition-colors flex gap-[0.125rem] text-inherit z-[1000]">
            <AnimatePresence>
                <motion.div
                    className="backdrop-blur-md absolute z-1 top-0 right-0 bottom-0 left-0"
                    animate={isOpenMobileMenu ? "open" : "closed"}
                    initial="closed"
                    variants={blurBackdropVariants}
                    transition={{ duration: isOpenMobileMenu ? 0.2 : 0.4, ease: 'easeInOut' }}
                />
            </AnimatePresence>
            {/* <div className={`backdrop-blur-md absolute z-1 top-0 right-0 ${isOpenMobileMenu ? "w-screen h-screen" : "bottom-0 left-0"}`}></div> */}
            <div className='flex p-[0.5rem] max-w-7xl w-full m-auto justify-between z-2'>
                <div className="flex items-center shrink-0">
                    <Link href={`/${locale}/`}>
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
                </div>

                <AnimatePresence>
                    <motion.ul
                        animate={isOpenMobileMenu ? "open" : "closed"}
                        initial="closed"
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        variants={menuVariants}
                        className='absolute w-screen flex flex-col text-2xl gap-8 left-0 items-center justify-center'
                        style={{
                            top: `calc(0px + ${!navRef.current ? 0 : navRef.current.offsetHeight}px)`,
                            height: `calc(100vh - ${!navRef.current ? 0 : navRef.current.offsetHeight}px)`,
                        }}
                    >
                        {navLinks.map((link) => (
                            <motion.li key={link.href}>
                                <Link
                                    href={`/${locale}${link.href}`}
                                    className='p-2'
                                >
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>

                <ul
                    className="hidden sm:flex grow list-none items-center justify-center gap-0.5"
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={`/${locale}${link.href}`}
                                className='p-2'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-2 shrink-0'>
                    <AnimatedThemeToggler className='cursor-pointer' />
                    <LanguageSwitcher/>
                    <MobileNavButton setIsOpen={setIsOpenMobileMenu} isOpen={isOpenMobileMenu} />
                </div>
            </div>
        </nav>
    </>
  );
}