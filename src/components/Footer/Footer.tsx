"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import { BrandLogo } from "@/components/navbar/logo";
import FanPattern from "@/components/ui/fan-pattern";

/** Email resmi (sama dengan yang dipakai di halaman /contact). */
const CONTACT_EMAIL = "boardingschool@hsi.id";

const PSB_URL = "https://psb.smaithsi.sch.id/";
const YOUTUBE_URL = "https://youtu.be/3tWGITKsc1M?feature=shared";
const WHATSAPP_URL = "https://wa.me/6289524513151";
const INSTAGRAM_URL = "https://www.instagram.com/hsi.boardingschool/";
const FACEBOOK_URL =
  "https://web.facebook.com/profile.php?id=61586171438715&locale=id_ID";

/** WajahDraft: lingkaran inisial (project tidak menyimpan foto portret). */
const joinAvatars = [
  { initials: "AF", accent: "from-blue-600 to-blue-400" },
  { initials: "SN", accent: "from-rose-500 to-amber-400" },
  { initials: "MR", accent: "from-emerald-600 to-teal-400" },
  { initials: "FZ", accent: "from-indigo-600 to-sky-400" },
  { initials: "KU", accent: "from-fuchsia-600 to-purple-400" },
];

const companyLinks = [
  { label: "Beranda", href: "/home" },
  { label: "Tentang", href: "/about" },
  { label: "Program", href: "/programs" },
  { label: "Galeri", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

const productLinks = [
  { label: "Pendaftaran", href: PSB_URL, external: true },
  { label: "FAQ", href: "/home#faq" },
  { label: "Testimoni", href: "/home#testimoni" },
  { label: "Lokasi", href: "/location" },
  { label: "Kontak", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: INSTAGRAM_URL, icon: InstagramIcon },
  { label: "Facebook", href: FACEBOOK_URL, icon: FacebookIcon },
  { label: "WhatsApp", href: WHATSAPP_URL, icon: MessageCircle },
  { label: "YouTube", href: YOUTUBE_URL, icon: YoutubeIcon },
];

/**
 * Footer: kartu ajakan "Gabung Kami" (banner biru) di atas, lalu kolom
 * informasi, newsletter, dan baris copyright.
 * Aturan radius konsentris: kartu 16px = padding 0 (foto/avatar di dalamnya
 * memakai radius penuh atau setengah).
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();
    if (!value) return;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Newsletter HSI Boarding School"
    )}&body=${encodeURIComponent(`Email saya: ${value}`)}`;
  };

  return (
    <footer className={cn("relative mt-20 overflow-hidden bg-[#f4f5fa]", montserrat.className)}>
      {/* motif kipas di sudut kiri atas */}
      <FanPattern className="absolute -left-20 -top-16 h-80 w-80 text-slate-300/70 sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        {/* Kartu Join Us */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-12 text-center sm:px-10 sm:py-14">
          {/* dekorasi busur kiri & kanan */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-24 size-64 rounded-full border-[26px] border-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-16 size-72 rounded-full border-[30px] border-white/10"
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/35 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
              <Sparkles className="size-3.5" aria-hidden />
              Gabung Kami
            </span>

            {/* AvatarETS */}
            <div className="mt-4 flex items-center -space-x-1.5">
              {joinAvatars.map((avatar) => (
                <span
                  key={avatar.initials}
                  className={cn(
                    "grid size-9 place-items-center rounded-full bg-gradient-to-br text-[11px] font-bold text-white ring-2 ring-blue-600",
                    avatar.accent
                  )}
                >
                  {avatar.initials}
                </span>
              ))}
            </div>

            <h2
              className={cn(
                "mt-5 text-xl font-bold uppercase leading-tight tracking-tight text-white sm:text-2xl lg:text-[2rem]",
                spaceGrotesk.className
              )}
            >
              Amankan Masa Depan
              <br />
              Generasi Anda
            </h2>

            <Link
              href={PSB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-7 inline-flex h-11 items-center gap-2 rounded-full border border-white/70 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-blue-700 hover:cursor-pointer",
                spaceGrotesk.className
              )}
            >
              Daftar Sekarang
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Kolom informasi */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/home" aria-label="Ke halaman utama">
              <BrandLogo className="w-11" />
            </Link>
            <p
              className={cn(
                "mt-4 max-w-xs text-sm leading-relaxed text-slate-600",
                montserrat.className
              )}
            >
              Ratusan orang tua mempercayakan pendidikan anak di HSI Boarding
              School — asrama, tahfidz, bahasa, dan teknologi dalam satu
              lingkungan yang Islami.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white hover:cursor-pointer"
                >
                  <social.icon className="size-4" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          {/* Perusahaan */}
          <div>
            <h3
              className={cn(
                "text-sm font-bold text-slate-900",
                spaceGrotesk.className
              )}
            >
              Perusahaan
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-slate-600 transition-colors hover:text-blue-600 hover:cursor-pointer",
                      montserrat.className
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h3
              className={cn(
                "text-sm font-bold text-slate-900",
                spaceGrotesk.className
              )}
            >
              Produk
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cn(
                      "text-sm text-slate-600 transition-colors hover:text-blue-600 hover:cursor-pointer",
                      montserrat.className
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className={cn(
                "text-sm font-bold text-slate-900",
                spaceGrotesk.className
              )}
            >
              Newsletter
            </h3>
            <p
              className={cn(
                "mt-4 max-w-xs text-sm leading-relaxed text-slate-600",
                montserrat.className
              )}
            >
              Dapatkan info terbaru tentang pendaftaran, program, dan kegiatan
              sekolah.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 p-1 pl-4 transition-colors focus-within:border-blue-400">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Alamat email"
                  aria-label="Alamat email untuk newsletter"
                  className={cn(
                    "min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400",
                    montserrat.className
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-blue-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-blue-700 hover:cursor-pointer",
                    spaceGrotesk.className
                  )}
                >
                  Subscribe
                  <ArrowRight className="size-3.5" aria-hidden />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Baris bawah */}
        <div className="flex flex-col items-center justify-between gap-2 rounded-full border border-slate-200 px-6 py-3 text-xs text-slate-500 sm:flex-row">
          <p className={montserrat.className}>
            &copy; {currentYear} HSI Boarding School. All rights reserved.
          </p>
          <p className={cn("flex items-center gap-2", montserrat.className)}>
            <span>Privacy Policy</span>
            <span aria-hidden>|</span>
            <span>Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
