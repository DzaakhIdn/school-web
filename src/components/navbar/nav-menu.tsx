"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { montserrat } from "@/lib/fonts";

import { cn } from "@/lib/utils";
import { navLinks as menuItems } from "./nav-items";


interface NavMenuProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const NavMenu = ({
  orientation = "horizontal",
  className = "",
}: NavMenuProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pathname = usePathname();
  const isVertical = orientation === "vertical";
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-menu-item");

    navItems.forEach((item) => {
      const link = item.querySelector("a");
      const underline = item.querySelector(".nav-menu-underline");
      const text = item.querySelector(".nav-menu-text");

      if (!link || !underline || !text) return;

      // Initial states (garis vertikal memakai scaleY, horizontal memakai scaleX)
      gsap.set(underline, {
        scaleX: isVertical ? 1 : 0,
        scaleY: isVertical ? 0 : 1,
        transformOrigin: isVertical ? "top center" : "left center",
      });

      const handleMouseEnter = () => {
        const itemTitle = item.getAttribute("data-item");
        setActiveItem(itemTitle);

        // Animate underline
        gsap.to(underline, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        // Animate text
        gsap.to(text, {
          x: isVertical ? 8 : 0,
          y: isVertical ? 0 : -3,
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
          scaleX: isVertical ? 1 : 0,
          scaleY: isVertical ? 0 : 1,
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
  }, [isVertical]);

  return (
    <nav ref={menuRef} className={`${className}`}>
      <ul
        className={`flex gap-6 ${
          orientation === "vertical"
            ? "flex-col items-start"
            : "items-center justify-center"
        }`}
      >
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.title}
              className="nav-menu-item relative"
              data-item={item.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Link href={item.href} className="relative block px-2 py-2" aria-current={isActive ? "page" : undefined}>
                <span
                  className={cn(
                    "nav-menu-text relative z-10 text-base font-medium transition-all duration-300",
                    isActive ? "font-semibold text-blue-600" : "text-gray-700",
                    montserrat.className
                  )}
                >
                  {item.title}
                </span>

                {/* Underline */}
                <span
                  className={`nav-menu-underline absolute ${
                    isVertical
                      ? "left-0 top-0 w-0.5 h-full bg-gradient-to-b"
                      : "bottom-0 left-0 w-full h-0.5 bg-gradient-to-r"
                  } from-blue-500 to-indigo-600 rounded-full`}
                  style={{ transform: isVertical ? "scaleY(0)" : "scaleX(0)" }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
