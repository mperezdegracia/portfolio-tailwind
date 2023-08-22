"use client"
import React, { useState } from 'react';
import NavbarDefault, { StickyNavbar } from './components/navbar'
import './globals.css'

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <html lang="en">
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
      <body id="body" className={darkMode ? 'dark' : ''}>
        <div className='dark:bg-primary bg-contrast_light min-h-screen p-4'>


          <StickyNavbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}></StickyNavbar>
          {children}
        
        
        
        
        
        </div>
        
    
        
        
        </body>
    </html>
  )
}
