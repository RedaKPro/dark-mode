"use client"
import React, { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";

const SwitchTheme = () => {
  const [isMounted, setIsMounted] = useState(false); // NEW: state to check if component is mounted
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    setIsMounted(true); // Set the state when component is mounted
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (isMounted) { // Only run this effect if component is mounted
      const body = document.body;
      body.setAttribute("data-theme", theme);
    }
  }, [theme, isMounted]);

  if (!isMounted) { // Don't render the component until it's mounted
    return null;
  }

  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "dark" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default SwitchTheme;
