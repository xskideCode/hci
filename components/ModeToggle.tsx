"use client";

import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import Button from "./ui/Button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeChange = (theme: "light" | "dark" | "system") => {
    setTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button variant="outline" size="icon" onClick={toggleDropdown}>
        <LuSun className="absolute top-2.5 left-2.5 h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <LuMoon className="absolute top-2.5 left-2.5  h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 px-1 w-36 rounded-md shadow-lg bg-white dark:bg-black-100 ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-20  ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleThemeChange("light")}
              className="block px-4 py-2 mb-1 rounded-md text-sm text-black-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              role="menuitem"
            >
              Light
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className="block px-4 py-2 my-1 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              role="menuitem"
            >
              Dark
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className="block px-4 py-2 mt-1 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              role="menuitem"
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
