import Link from 'next/link';
import React from 'react';
import ThemeLogo from './ThemeLogo';
import ThemeToggle from './ThemeToggle';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="bg-transparent">
                <div className="flex items-center justify-between gap-2 p-4">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <ThemeLogo />
                        </Link>
                        <Link href="/areas" className="text-lg px-4 py-2 hover:opacity-80">
                            Istraži
                        </Link>
                        <Link href="/book" className="text-lg px-4 py-2 hover:opacity-80">
                            Upute
                        </Link>
                    </div>
                    <ThemeToggle />
                </div>
            </header>
            {children}
        </>
    );
};

export default MainLayout;
