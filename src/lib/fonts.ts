import localFont from "next/font/local";

/**
 * Font site — self-hosted (file woff2 di `src/assets/fonts`).
 *
 * Sebelumnya memakai `next/font/google` yang mengunduh font saat build/dev.
 * Jaringan ke Google Fonts sering gagal di lingkungan ini → font diam-diam
 * jatuh ke fallback (tampilan berbeda) dan `className` SSR vs client beda →
 * hydration mismatch. Self-hostinghilangkan ketergantungan jaringan tersebut.
 *
 * Seluruh pemakaian font di project diarahkan ke modul ini (satu sumber
 * deklarasi) — lihat `src/assets/fonts/README.md` untuk asal file.
 */

export const montserrat = localFont({
  src: [
    {
      path: "../assets/fonts/montserrat-variable-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat-italic-variable-latin.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const spaceGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/space-grotesk-variable-latin.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const raleway = localFont({
  src: [
    {
      path: "../assets/fonts/raleway-variable-latin.woff2",
      weight: "400 800",
      style: "normal",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const poppins = localFont({
  src: [
    { path: "../assets/fonts/poppins-100-latin.woff2", weight: "100" },
    { path: "../assets/fonts/poppins-300-latin.woff2", weight: "300" },
    { path: "../assets/fonts/poppins-400-latin.woff2", weight: "400" },
    { path: "../assets/fonts/poppins-600-latin.woff2", weight: "600" },
    { path: "../assets/fonts/poppins-700-latin.woff2", weight: "700" },
    { path: "../assets/fonts/poppins-900-latin.woff2", weight: "900" },
  ],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const geistSans = localFont({
  src: [
    {
      path: "../assets/fonts/geist-variable-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const geistMono = localFont({
  src: [
    {
      path: "../assets/fonts/geist-mono-variable-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
