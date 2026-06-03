"use client";
import Image from "next/image";
import { NavigationSheet } from "./navigation-sheet";
import Navigation from "./navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useLayoutEffect } from "react";

const navItems = [
  {
    items: [
      { title: "Beranda", href: "/home" },
      { title: "Tentang", href: "/about" },
      { title: "Galeri", href: "/gallery" },
    ],
  },
  {
    items: [
      { title: "Program", href: "/programs" },
      { title: "Lokasi", href: "/location" },
      { title: "Kontak", href: "/contact" },
    ],
  },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isMounted) {
      setIsScrolled(latest > 50);
    }
  });
  return (
    <motion.nav
      initial={false}
      suppressHydrationWarning
      className={`h-16 md:h-20 fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md h-20"
          : "bg-transparent lg:h-24"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="h-full hidden lg:flex items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex-1 flex justify-start">
          <Navigation menuItems={navItems} index={0} align="start" />
        </div>
        
        <div className="flex-shrink-0 mx-8" onClick={() => {
            window.location.href = "/";
          }}>
          <Image
            src={"/important/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className={`w-12 h-auto transition-all duration-300 ${
              isScrolled ? "md:w-14" : "md:w-16"
            }`}
          />
        </div>
        
        <div className="flex-1 flex justify-end">
          <Navigation menuItems={navItems} index={1} align="end" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="h-full flex items-center justify-between lg:hidden px-4 sm:px-6 relative">
          <div className="w-10 h-10"></div>
        <div className="flex items-center justify-center">
          <Image
            src={"/important/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className={`h-auto transition-all duration-300 ${isScrolled ? "w-14 md:w-16" : "w-12 md:w-12"}`}
          />
        </div>
        
        <div className="w-10 h-10">
          <NavigationSheet />
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;



