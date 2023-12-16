"use client";
import { useTheme } from "next-themes";
import { React } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="px-4 py-2 rounded-lg bg-tertiary dark:bg-blue-900 text-gray-300 hover:bg-gray-600 "
    >
      <MoonIcon className="h-6 w-6 text-white" />
    </button>
  );
};

export default ThemeButton;
