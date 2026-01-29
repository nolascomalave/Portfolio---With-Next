"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type NavContextType = {
    activeSection: string;
    setActiveSection: (section: string) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
    const [activeSection, setActiveSection] = useState<string>('home'); // sección inicial

    return (
        <NavContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </NavContext.Provider>
    );
}

export function useNav() {
    const context = useContext(NavContext);
    if (!context) throw new Error('useNav debe usarse dentro de NavProvider');
    return context;
}