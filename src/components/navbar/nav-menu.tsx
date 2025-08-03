"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface NavMenuProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const menuItems = [
  { title: "Beranda", href: "/home" },
  { title: "Tentang", href: "/about" },
  { title: "Program", href: "/programs" },
  { title: "Galeri", href: "/gallery" },
  { title: "Blog", href: "/blog" },
  { title: "Kontak", href: "/contact" },
];

export const NavMenu = ({
  orientation = "horizontal",
  className = "",
}: NavMenuProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-menu-item");

    navItems.forEach((item) => {
      const link = item.querySelector("a");
      const underline = item.querySelector(".nav-menu-underline");
      const text = item.querySelector(".nav-menu-text");

      if (!link || !underline || !text) return;

      // Initial states
      gsap.set(underline, {
        scaleX: 0,
        transformOrigin:
          orientation === "vertical" ? "top center" : "left center",
      });

      const handleMouseEnter = () => {
        const itemTitle = item.getAttribute("data-item");
        setActiveItem(itemTitle);

        // Animate underline
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        // Animate text
        gsap.to(text, {
          x: orientation === "vertical" ? 8 : 0,
          y: orientation === "vertical" ? 0 : -3,
          scale: 1.05,
          color: "#3b82f6",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        setActiveItem(null);

        // Animate underline
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        // Animate text back
        gsap.to(text, {
          x: 0,
          y: 0,
          scale: 1,
          color: "#374151",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, [orientation]);

  return (
    <nav ref={menuRef} className={`${className}`}>
      <ul
        className={`flex gap-6 ${
          orientation === "vertical"
            ? "flex-col items-start"
            : "items-center justify-center"
        }`}
      >
        {menuItems.map((item, index) => (
          <li
            key={item.title}
            className="nav-menu-item relative"
            data-item={item.title}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <Link href={item.href} className="relative block px-2 py-2">
              <span
                className={`nav-menu-text relative z-10 text-base font-medium text-gray-700 transition-all duration-300 ${montserrat.className}`}
              >
                {item.title}
              </span>

              {/* Underline */}
              <span
                className={`nav-menu-underline absolute ${
                  orientation === "vertical"
                    ? "left-0 top-0 w-0.5 h-full bg-gradient-to-b"
                    : "bottom-0 left-0 w-full h-0.5 bg-gradient-to-r"
                } from-blue-500 to-indigo-600 rounded-full`}
                style={{ transform: "scaleX(0)" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
