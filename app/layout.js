"use client";
import { StickyNavbar } from "./components/navbar";
import "./globals.css";
import "font-awesome/css/font-awesome.min.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider attribute="class">
          <div className="p-5" id="home">
            <StickyNavbar></StickyNavbar>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
