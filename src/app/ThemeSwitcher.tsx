"use client"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import { GiCupcake, GiRetroController } from 'react-icons/gi';

const themes = [
    { name: "Light", icon: <FaSun /> },
    { name: "Dark", icon: <FaMoon /> },
    { name: "Cupcake", icon: <GiCupcake /> },
    { name: "Retro", icon: <GiRetroController /> },
];

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="theme-switcher flex space-x-3">
            {themes.map((t) => (
                <div 
                    key={t.name}
                    onClick={() => setTheme(t.name.toLowerCase())}
                    className={theme === t.name.toLowerCase() ? "active-theme" : ""}
                >
                    {t.icon}
                </div>
            ))}
        </div>
    );
}

export default ThemeSwitch;
