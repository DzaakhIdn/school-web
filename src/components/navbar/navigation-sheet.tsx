"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  GraduationCap,
  Home,
  Images,
  Info,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Newspaper,
  X,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { BrandLogo } from "./logo";
import { navCta, navLinks } from "./nav-items";

const PSB_LINK = "https://psb.hsiboardingschool.id/auth/auth-user";

const linkIcons: Record<string, LucideIcon> = {
  "/home": Home,
  "/about": Info,
  "/programs": GraduationCap,
  "/gallery": Images,
  "/location": MapPin,
  "/blog": Newspaper,
};

const quickLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/6289524513151",
    accent: "text-green-600 bg-green-50",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:boardingschool@hsi.id",
    accent: "text-blue-600 bg-blue-50",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/hsiboardingschool",
    accent: "text-pink-600 bg-pink-50",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@HSI-BOARDING-SCHOOL",
    accent: "text-red-600 bg-red-50",
  },
];

/** Menu mobile: tombol ikon di navbar → panel samping berisi tautan, kontak cepat, dan CTA. */
export const NavigationSheet = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Tutup panel setiap kali halaman berpindah.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Buka menu navigasi"
          className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:cursor-pointer hover:border-blue-300 hover:text-blue-600"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        hideClose
        aria-describedby={undefined}
        className="w-[88%] gap-0 overflow-y-auto rounded-l-3xl border-l-0 bg-white p-0 sm:max-w-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 pb-4 pt-5">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <BrandLogo className="w-10" />
            <div className="leading-tight">
              <p
                className={cn(
                  spaceGrotesk.className,
                  "text-base font-bold text-slate-900",
                )}
              >
                HSI Boarding School
              </p>
              <p
                className={cn(
                  montserrat.className,
                  "text-[11px] text-slate-500",
                )}
              >
                Sekolahnya Generasi Unggul
              </p>
            </div>
          </Link>
          <SheetClose
            aria-label="Tutup menu"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
          >
            <X className="size-5" />
          </SheetClose>
        </div>

        <div className="mx-5 h-px bg-slate-100" />

        {/* Tautan utama */}
        <nav aria-label="Menu utama" className="px-3 py-4">
          <p
            className={cn(
              montserrat.className,
              "px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400",
            )}
          >
            Menu
          </p>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const Icon = linkIcons[link.href] ?? ChevronRight;
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.08 + index * 0.04,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group flex items-center gap-3 rounded-2xl px-2 py-2 transition-colors",
                      isActive ? "bg-blue-50" : "hover:bg-slate-50",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-xl transition-colors",
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:text-blue-600",
                      )}
                    >
                      <Icon className="size-[18px]" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        montserrat.className,
                        "flex-1 text-[15px] font-semibold",
                        isActive ? "text-blue-600" : "text-slate-700",
                      )}
                    >
                      {link.title}
                    </span>
                    <ChevronRight
                      className={cn(
                        "size-4 transition-transform group-hover:translate-x-0.5",
                        isActive ? "text-blue-600" : "text-slate-300",
                      )}
                      aria-hidden
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Kontak cepat */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mx-5 rounded-2xl bg-slate-50 p-4"
        >
          <p
            className={cn(
              spaceGrotesk.className,
              "text-sm font-bold text-slate-900",
            )}
          >
            Butuh bantuan?
          </p>
          <p
            className={cn(
              montserrat.className,
              "mt-0.5 text-xs text-slate-500",
            )}
          >
            Hubungi kami atau ikuti kabar terbaru santri.
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {quickLinks.map(({ icon: Icon, label, href, accent }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 rounded-xl bg-white py-2.5 ring-1 ring-slate-100 transition-shadow hover:shadow-md"
              >
                <span
                  className={cn(
                    "grid size-8 place-items-center rounded-lg",
                    accent,
                  )}
                >
                  <Icon className="size-4" aria-hidden />
                </span>
                <span
                  className={cn(
                    montserrat.className,
                    "text-[10px] font-medium text-slate-600",
                  )}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-auto flex flex-col gap-2 px-5 pb-6 pt-6">
          <Link
            href={PSB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              montserrat.className,
              "inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-700",
            )}
          >
            Daftar Sekarang
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
          <Link
            href={navCta.href}
            onClick={() => setOpen(false)}
            className={cn(
              montserrat.className,
              "inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600",
            )}
          >
            {navCta.title}
          </Link>
          <p
            className={cn(
              montserrat.className,
              "pt-2 text-center text-[11px] text-slate-400",
            )}
          >
            © {new Date().getFullYear()} HSI Boarding School
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
