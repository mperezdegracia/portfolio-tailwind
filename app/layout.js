"use client";
import React, { useEffect, useState } from "react";
import NavbarDefault, { StickyNavbar } from "./components/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  // Use useEffect to apply the dark mode class after rendering
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <html lang="en">
      <body id="body">
        <div
          className={`dark:bg-primary bg-contrast_light min-h-screen p-4 ${
            darkMode ? "dark" : ""
          }`}
        >
          <StickyNavbar
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          ></StickyNavbar>
          {children}
        </div>
      </body>
    </html>
  );
}
