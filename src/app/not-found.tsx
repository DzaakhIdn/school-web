"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { spaceGrotesk, montserrat } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(TextPlugin);



export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline untuk animasi masuk
      const tl = gsap.timeline();

      // Animasi 404 number dengan bounce effect
      tl.fromTo(
        numberRef.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
        }
      )
        // Animasi title dengan typewriter effect
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        // Animasi description
        .fromTo(
          descRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Animasi buttons
        .fromTo(
          buttonsRef.current?.children || [],
          {
            opacity: 0,
            y: 20,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );

      // Floating animation untuk background elements
      if (floatingRef.current?.children) {
        gsap.to(floatingRef.current.children, {
          y: "random(-20, 20)",
          x: "random(-15, 15)",
          rotation: "random(-10, 10)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            amount: 2,
            from: "random",
          },
        });
      }

      // Hover animations untuk buttons
      const buttons = buttonsRef.current?.querySelectorAll("button, a");
      buttons?.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Glitch effect untuk 404 number
      const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      glitchTl
        .to(numberRef.current, {
          x: "random(-5, 5)",
          duration: 0.1,
          repeat: 5,
          yoyo: true,
        })
        .to(numberRef.current, {
          x: 0,
          duration: 0.1,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400/30 rounded-full blur-lg" />
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-blue-500/15 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-yellow-500/25 rounded-full blur-lg" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-300/20 rounded-full blur-md" />
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-yellow-300/20 rounded-full blur-lg" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* 404 Number */}
        <div
          ref={numberRef}
          className={`${spaceGrotesk.className} text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-8 leading-none`}
        >
          404
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className={`${spaceGrotesk.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight`}
        >
          Halaman Tidak{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            Ditemukan
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className={`${montserrat.className} text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto`}
        >
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
          telah dipindahkan atau URL yang dimasukkan salah.
        </p>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-50"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Halaman Sebelumnya
          </Button>

          <Link href="/search">
            <Button
              variant="ghost"
              size="lg"
              className="text-slate-600 hover:text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <Search className="w-5 h-5 mr-2" />
              Cari Halaman
            </Button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className={`${montserrat.className} text-sm text-slate-500`}>
            Jika masalah berlanjut, silakan{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
            >
              hubungi kami
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}