"use client"
import Link from 'next/link';
import ThemeSwitch from '../ThemeSwitcher';

export default function Navbar() {
    return (
        <div className="bg-primary text-primary-content">
            <nav className="border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <ThemeSwitch />
                    <a href="#" className="flex items-center">
                        <img src="../utils/img/logo2.png" className="h-8 mr-3" alt="LogoR" />
                        <span className="self-center text-2xl font-semibold">KHETTAB Reda</span>
                    </a>
                    <div className="">
                    <Link legacyBehavior href="/" className="dark:text-white hover:text-blue-700 dark:hover:text-blue-500"><a>Home</a></Link>
                        <Link legacyBehavior href="#" className="dark:text-white hover:text-blue-700 dark:hover:text-blue-500"><a>Projects</a></Link>
                        <Link legacyBehavior href="/about/us/" className="dark:text-white hover:text-blue-700 dark:hover:text-blue-500"><a>About Me</a></Link>
                        <Link legacyBehavior href="/contact/" className="dark:text-white hover:text-blue-700 dark:hover:text-blue-500"><a>Contact</a></Link>
                    </div>
                    {/* ... Rest of Navbar ... */}
                

                    {/* Menu Links (Far Right) */}
                    <div className="absolute bottom-2 right-4 flex space-x-4">
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}
