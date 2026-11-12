"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { montserrat } from "@/lib/fonts";

import { cn } from "@/lib/utils";

import { BrandLogo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";
import { navCta, navLinks } from "./nav-items";


/**
 * Navbar bar putih penuh items — bentuknya tidak pernah berubah; saat scroll
 * cukup mendapat drop shadow. Aturan radius konsentris: outer = inner + padding
 * (elemen dalam bar memakai radius penuh → selisihnya = padding-nya).
 */
const SCROLL_THRESHOLD = 24;

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300",
        isScrolled
          ? "shadow-[0_12px_32px_-12px_rgba(15,23,42,0.28)]"
          : "shadow-none",
        montserrat.className
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Ke halaman utama"
          className="shrink-0 hover:cursor-pointer"
        >
          <BrandLogo className="w-10 sm:w-11" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:cursor-pointer hover:text-blue-600",
                    isActive ? "text-blue-600" : "text-slate-600"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-2">
          <Link
            href={navCta.href}
            className="hidden items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:cursor-pointer hover:bg-blue-700 sm:inline-flex"
          >
            {navCta.title}
          </Link>
          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
