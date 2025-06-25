"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Docs", href: "/docs" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-neutral-200/50 dark:border-neutral-800/50 bg-white/95 dark:bg-neutral-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/logo-placeholder.svg" alt="Lutions Logo" width={32} height={32} />
              <span className="font-bold text-xl">Lutions</span>
            </Link>
          </div>

          {/* Centered Nav Links - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NavLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative font-medium text-neutral-500 dark:text-neutral-400 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-neutral-900 dark:hover:text-white after:hover:scale-x-100">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right-aligned Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/LutionsLab" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-500 dark:hover:text-white">
              <FaGithub className="h-6 w-6" />
            </a>
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700">
                {link.name}
              </Link>
            ))}
             <a href="https://github.com/LutionsLab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700">
              <FaGithub className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
