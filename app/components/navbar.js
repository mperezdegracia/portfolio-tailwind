"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Card,
} from "@material-tailwind/react";
import ThemeButton from "./theme_button";
import { navbarData } from "../data/navbarData";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const data = navbarData;
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [navbarHeight, setNavbarHeight] = useState(0);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  useEffect(() => {
    // Calculate the height of the sticky navbar
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate the target scroll position, accounting for the navbar height
      const scrollPosition = section.offsetTop - navbarHeight - 20; // random el 20 pero messirve
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };
  const handleNavItemClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  const navList = (
    <ul className="mb-4 mt-2 dark:text-white flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="lead" className="p-1">
        <a
          onClick={(e) => {
            e.preventDefault();
            handleNavItemClick("home");
          }}
          className="flex items-center font-primary transition-all duration-300 hover:bg-primary_light hover:text-secondary_light hover:rounded-lg px-4 py-2 cursor-pointer"
        >
          {data.bar_link1}
        </a>
      </Typography>

      <Typography as="li" variant="lead" className="p-1">
        <a
          onClick={(e) => {
            e.preventDefault();
            handleNavItemClick(data.bar_link3.toLowerCase());
          }}
          className="flex items-center font-primary transition-all duration-300 hover:bg-primary_light hover:text-secondary_light hover:rounded-lg px-4 py-2 cursor-pointer"
        >
          {data.bar_link3}
        </a>
      </Typography>
      <Typography as="li" variant="lead" className="p-1">
        <a
          onClick={(e) => {
            e.preventDefault();
            handleNavItemClick(data.bar_link4.toLowerCase());
          }}
          className="flex items-center font-primary transition-all duration-300 hover:bg-primary_light hover:text-secondary_light hover:rounded-lg px-4 py-2 cursor-pointer"
        >
          {data.bar_link4}
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      id="navbar"
      className="sticky top-0 z-10 rounded-2xl dark:border-black bg-primary_light2 dark:bg-secondary h-max max-w-full  py-2 px-4 lg:px-8 lg:py-4"
    >
      <div className="flex items-center justify-between text-contrast">
        <ThemeButton></ThemeButton>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <a href="https://www.linkedin.com/in/mperezdegracia/">

            <Button
              size="sm"
              className="hidden bg-opacity-100 lg:inline-block bg-tertiary"
            >
              <span className="font-primary text-lg">{data.buttonText}</span>
            </Button>

          </a>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <a href="https://www.linkedin.com/in/mperezdegracia/">
          <Button size="md" fullWidth className="mb-2 bg-tertiary">
            <span className="font-primary text-lg">{data.buttonText}</span>
          </Button>

        </a>

      </Collapse>
    </Navbar>
  );
}
