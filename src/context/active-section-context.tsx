'use client'
import React, {createContext, useContext, useState} from 'react';
import {links} from '@/lib/data'

type SectionName = typeof links[number]["name"]

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

function ActiveSectionContextProvider({
                                          children,
                                      }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')


    return (<ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
    }}>
        {children}
    </ActiveSectionContext.Provider>);
}

export default ActiveSectionContextProvider;


export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("useActiveSectionContext must be used within activeSectionContext");
    }

    return context;
}