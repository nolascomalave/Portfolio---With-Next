'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

export default function Navbar() {
  const __ = useTranslations('layout.sections-list');
  const pathname = usePathname();
  const locale = useLocale();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  const navLinks = [
    { href: '/', label: __('home'), key: '/' },
    { href: '/about', label: __('about'), key: '/about' },
    { href: '/skills', label: __('skills'), key: '/skills' },
    { href: '/projects', label: __('projects'), key: '/projects' },
    { href: '/contact', label: __('contact'), key: '/contact' },
  ];

  // Encontrar el enlace activo
  const activeLink = navLinks.find(link => currentPath === link.key) || navLinks[0];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors flex gap-[0.125rem] text-inherit hidden sm:block">
        <div className='flex p-[0.5rem] max-w-7xl w-full m-auto'>
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

            <ul className="grow flex list-none text-red items-center justify-center gap-0.5">
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
            </div>
        </div>
    </nav>
  );
}