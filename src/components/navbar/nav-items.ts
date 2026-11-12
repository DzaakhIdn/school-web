export type NavItem = {
  title: string;
  href: string;
};

/**
 * Single source of truth untuk tautan navbar (desktop pill, sheet mobile).
 * "Kontak" dipisah sebagai CTA di ujung navbar (`navCta`).
 */
export const navLinks: NavItem[] = [
  { title: "Beranda", href: "/home" },
  { title: "Tentang", href: "/about" },
  { title: "Program", href: "/programs" },
  { title: "Galeri", href: "/gallery" },
  { title: "Lokasi", href: "/location" },
];

/** Call-to-action utama di ujung kanan navbar. */
export const navCta: NavItem = { title: "Kontak Kami", href: "/contact" };
