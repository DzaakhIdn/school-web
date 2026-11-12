"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Latar aurora: lapisan gradien radial biru/indigo yang bergerak sangat lambat
 * sehingga memberi kesan cahaya aurora di belakang konten (tidak mengganggu
 * keterbacaan teks karena memakai `mix-blend-multiply` di atas dasar putih).
 */
const AuroraBackground = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden mix-blend-multiply",
        className
      )}
    >
      <motion.div
        className="absolute -left-40 -top-48 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.55),rgba(96,165,250,0)_68%)] blur-3xl"
        animate={{ x: [0, 48, -16, 0], y: [0, -28, 18, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.45),rgba(129,140,248,0)_68%)] blur-3xl"
        animate={{ x: [0, -34, 14, 0], y: [0, 24, -16, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-52 left-1/4 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.42),rgba(125,211,252,0)_68%)] blur-3xl"
        animate={{ x: [0, 26, -20, 0], y: [0, 18, -26, 0] }}
        transition={{ duration: 31, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AuroraBackground;
