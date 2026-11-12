"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, Volume2, VolumeX } from "lucide-react";

import { cn } from "@/lib/utils";
import { spaceGrotesk } from "@/lib/fonts";

type YoutubeVideoProps = {
  /** ID video YouTube. */
  videoId: string;
  title: string;
  /** Poster yang ditampilkan sebelum/selama video dimuat. */
  poster?: string;
  className?: string;
};

/**
 * Kartu video YouTube: autoplay **tanpa suara** (muted autoplay adalah satu-satunya
 * autoplay yang diizinkan browser), loop, dan kontrol kustom.
 *
 * Iframe dibuat `pointer-events-none` supaya tombol/cc/logo bawaan YouTube tidak
 * muncul saat kursor lewat di atas video — semua interaksi lewat overlay kita.
 * Tombol tengah bukan play/pause, melainkan tautan ke video di YouTube.
 */
const YoutubeVideo = ({
  videoId,
  title,
  poster,
  className,
}: YoutubeVideoProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  /**
   * Player YouTube membroadcast perubahan state lewat postMessage (butuh
   * `enablejsapi=1`). Kalau autoplay diblokir browser → player berstatus
   * PAUSED dan YouTube menampilkan chrome-nya (tombol CC, logo, panah).
   * Dalam kondisi itu iframe kita sembunyikan → poster tampil bersih.
   */
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("youtube.com")) return;

      let data: { event?: string; info?: { playerState?: number } };
      try {
        data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }

      const state = data.info?.playerState;
      if (typeof state === "number") {
        // 1 = PLAYING, 2 = PAUSED
        setIsPlaying(state === 1);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: next ? "muteVideo" : "unMuteVideo",
        args: "",
      }),
      "*"
    );
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] shadow-xl",
        className
      )}
    >
      <div className="relative aspect-video w-full sm:aspect-[2/1]">
        {poster && (
          <Image
            src={poster}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        )}

        {/*
          YouTube selalu letterbox video 16:9 di dalam iframe. Supaya video pas
          mengisi card (2:1 di desktop) tanpa ruang hitam, iframe diskalakan
          (2 : 16/9 = 1,125) — dan LANJUTAN di-crop: skala lebih besar + geser ke
          atas supaya strip kontrol YouTube (tombol CC, logo, share, "more
          videos") jatuh DI LUAR area card, sehingga chrome YT tidak pernah
          terlihat meski player merendernya.
        */}
        <iframe
          ref={iframeRef}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.25] -translate-y-[6%] transition-opacity duration-500 lg:scale-[1.35] lg:-translate-y-[7%]"
          style={{ opacity: isPlaying ? 1 : 0 }}
          src={`https://www.youtube.com/embed/${videoId}?si=RzGj4V6kfEQVFvCo&controls=0&modestbranding=1&rel=0&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&autoplay=1&mute=1&loop=1&playlist=${videoId}&enablejsapi=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/*
          Lapisan penutup: menyembunyikan seluruh UI bawaan YouTube (tombol CC,
          logo, share, "more videos") sekaligus memblokir klik/tap ke player,
          sehingga YT tidak pernah menampilkan chrome-nya.
        */}
        <div aria-hidden className="absolute inset-0 z-10" />

        {/* Gradasi + judul */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Tombol tengah → tautan ke video di YouTube */}
        <Link
          href={`https://youtu.be/${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tonton video tur kampus di YouTube"
          className="absolute left-1/2 top-1/2 z-30 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-300/40 bg-blue-500/25 backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:cursor-pointer sm:size-24"
        >
          <span className="grid size-12 place-items-center rounded-full bg-white text-blue-600 shadow-xl sm:size-14">
            <Play className="size-5 translate-x-0.5 sm:size-6" fill="currentColor" aria-hidden />
          </span>
        </Link>

        {/* Kontrol suara (kanan bawah) */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Nyalakan suara" : "Matikan suara"}
          className="absolute bottom-5 right-5 z-30 grid size-11 place-items-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/30 hover:cursor-pointer"
        >
          {isMuted ? (
            <VolumeX className="size-5" aria-hidden />
          ) : (
            <Volume2 className="size-5" aria-hidden />
          )}
        </button>

        <p
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 z-20 px-6 pb-6 text-center text-lg font-bold leading-tight text-white sm:pb-8 sm:text-2xl",
            spaceGrotesk.className
          )}
        >
          Jelajahi Kampus
          <br />
          Kami Secara Virtual
        </p>
      </div>
    </div>
  );
};

export default YoutubeVideo;
