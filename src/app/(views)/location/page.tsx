"use client";

import { spaceGrotesk, montserrat } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type MapLibreGL from "maplibre-gl";
import {
  ArrowUpRight,
  ExternalLink,
  Locate,
  MapPin,
  MapPinned,
  Navigation,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import AuroraBackground from "@/components/ui/aurora-background";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/components/ui/mapcn-marker-tooltip";

interface LocationData {
  id: number;
  name: string;
  type: "ikhwan" | "akhwat";
  city: string;
  province: string;
  address: string;
  mapCode: string;
  googleMapsLink: string;
  /** Koordinat titik kampus (dari link Google Maps). */
  lng: number;
  lat: number;
  description: string;
  image: string;
  students: number;
  dorms: number;
  mushrif: number;
  headAsrama: string;
}

const locations: LocationData[] = [
  {
    id: 1,
    name: "HSI Boarding School Sukabumi",
    type: "ikhwan",
    city: "Sukabumi",
    province: "Jawa Barat",
    address:
      "2QJP+M6X, RT.03/RW.08, Cikembar, Kec. Cikembar, Kabupaten Sukabumi, Jawa Barat 43157",
    mapCode: "2QJP+M6X",
    googleMapsLink: "https://maps.app.goo.gl/rTqp7sD5zuHQmyKJ8",
    lng: 106.7855784,
    lat: -6.9682516,
    description:
      "Kampus utama HSI Boarding School untuk santri ikhwan, dengan lingkungan belajar yang kondusif, fasilitas pendukung yang lengkap, serta pembinaan terarah untuk mengembangkan ilmu, keterampilan, karakter, dan nilai-nilai tauhid.",
    image: "/assets/location/sukabumi.jpg",
    students: 60,
    dorms: 6,
    mushrif: 7,
    headAsrama: "Ustadz M Ulil Albab",
  },
  {
    id: 2,
    name: "HSI Boarding School Purworejo",
    type: "ikhwan",
    city: "Purworejo",
    province: "Jawa Tengah",
    address:
      "72WF+64Q, Krajan, Purworejo, Kec. Purworejo, Kabupaten Purworejo, Jawa Tengah 54118",
    mapCode: "72WF+64Q",
    googleMapsLink: "https://maps.app.goo.gl/aJNLHrHHsnefLFfk6",
    lng: 110.0228714,
    lat: -7.704407,
    description:
      "Cabang HSI Boarding School untuk santri ikhwan di Jawa Tengah, dengan lingkungan belajar yang nyaman, fasilitas yang memadai, serta pembinaan terarah sebagai bekal generasi muslim unggul.",
    image: "/assets/location/purworejo.jpg",
    students: 85,
    dorms: 9,
    mushrif: 6,
    headAsrama: "Mr. Azis Soffan",
  },
  {
    id: 3,
    name: "HSI Boarding School Bekasi",
    type: "akhwat",
    city: "Bekasi",
    province: "Jawa Barat",
    address:
      "Jl. Kp. Tenggilis, RT.004/RW.012, Mustikajaya, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17158",
    mapCode: "Mustikajaya, Bekasi",
    googleMapsLink: "https://maps.app.goo.gl/1qtVUquDzGT5HPrt5",
    lng: 107.0397104,
    lat: -6.2883814,
    description:
      "Kampus khusus santri akhwat, menghadirkan lingkungan belajar yang aman dan nyaman, fasilitas lengkap, serta pembinaan terarah sebagai bekal generasi muslimah yang unggul.",
    image: "/assets/location/bekasi.jpg",
    students: 37,
    dorms: 3,
    mushrif: 3,
    headAsrama: "Ustadzah Nabila Widya S",
  },
];

/** Batas peta yang memuat ketiga kampus. */
const ALL_BOUNDS: [[number, number], [number, number]] = [
  [
    Math.min(...locations.map((l) => l.lng)),
    Math.min(...locations.map((l) => l.lat)),
  ],
  [
    Math.max(...locations.map((l) => l.lng)),
    Math.max(...locations.map((l) => l.lat)),
  ],
];

const heroStats = [
  { label: "Cabang", value: "3" },
  { label: "Total Santri", value: "470+" },
  { label: "Tahun Berdiri", value: "2020+" },
  { label: "Fasilitas", value: "18+" },
];

const typeStyle = {
  ikhwan: {
    label: "Ikhwan",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-600",
    ring: "bg-blue-500/30",
  },
  akhwat: {
    label: "Akhwat",
    badge: "bg-pink-50 text-pink-700 border-pink-200",
    dot: "bg-pink-500",
    ring: "bg-pink-400/30",
  },
} as const;

export default function LocationPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);
  const mapRef = useRef<MapLibreGL.Map | null>(null);
  const mapSectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  const active = locations.find((l) => l.id === activeId) ?? null;

  const focusLocation = (location: LocationData) => {
    setActiveId(location.id);
    mapRef.current?.flyTo({
      center: [location.lng, location.lat],
      zoom: 14,
      duration: 1600,
      essential: true,
    });
  };

  const showAll = () => {
    setActiveId(null);
    mapRef.current?.fitBounds(ALL_BOUNDS, { padding: 80, duration: 1400 });
  };

  const viewOnMap = (location: LocationData) => {
    mapSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.setTimeout(() => focusLocation(location), 450);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16">
        <AuroraBackground />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${spaceGrotesk.className} inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-[13px] font-medium text-blue-600`}
          >
            <MapPin className="size-3.5" aria-hidden />
            Lokasi Kampus
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`${spaceGrotesk.className} mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl`}
          >
            Jangkauan HSIBS di Indonesia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className={`${montserrat.className} mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base`}
          >
            Tiga kampus HSI Boarding School hadir di lokasi strategis dengan
            komitmen yang sama: membentuk generasi bertauhid, berakhlak Qurani,
            dan berdaya saing global.
          </motion.p>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-4 text-center backdrop-blur"
            >
              <p
                className={`${spaceGrotesk.className} text-2xl font-bold text-blue-600 sm:text-3xl`}
              >
                {stat.value}
              </p>
              <p
                className={`${montserrat.className} mt-1 text-xs text-slate-600 sm:text-sm`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.dl>
      </section>

      {/* PETA + DAFTAR KAMPUS */}
      <section
        ref={mapSectionRef}
        className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-4 lg:h-[560px] lg:grid-cols-[340px_1fr]">
          {/* Daftar kampus — mobile: 3 kotak di atas peta; desktop: daftar di kiri */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:flex lg:flex-col">
            {locations.map((location) => {
              const style = typeStyle[location.type];
              const isActive = location.id === activeId;
              return (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => focusLocation(location)}
                  aria-pressed={isActive}
                  aria-label={`Tampilkan ${location.name} di peta`}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border text-left transition hover:cursor-pointer",
                    "aspect-square lg:flex lg:aspect-auto lg:flex-1 lg:items-center lg:gap-4 lg:p-3",
                    isActive
                      ? "border-blue-500 ring-2 ring-blue-500/30 lg:bg-blue-50/60 lg:shadow-lg lg:shadow-blue-500/10 lg:ring-0"
                      : "border-slate-200 bg-white hover:border-blue-300",
                  )}
                >
                  {/* Foto: penuh di mobile, thumbnail di desktop */}
                  <div className="absolute inset-0 overflow-hidden bg-slate-100 lg:relative lg:inset-auto lg:size-24 lg:shrink-0 lg:rounded-xl">
                    <Image
                      src={location.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 33vw, 96px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:hidden" />
                  </div>

                  {/* Label kotak (mobile) */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 lg:hidden">
                    <span
                      className={cn(
                        "mb-1 block size-2 rounded-full ring-2 ring-white",
                        style.dot,
                      )}
                    />
                    <p
                      className={`${spaceGrotesk.className} text-sm font-bold leading-tight text-white`}
                    >
                      {location.city}
                    </p>
                  </div>

                  {/* Info baris (desktop) */}
                  <div className="hidden min-w-0 flex-1 lg:block">
                    <span
                      className={cn(
                        montserrat.className,
                        "inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                        style.badge,
                      )}
                    >
                      {style.label}
                    </span>
                    <p
                      className={`${spaceGrotesk.className} mt-1.5 text-base font-bold leading-tight text-slate-900`}
                    >
                      {location.city}
                    </p>
                    <p
                      className={`${montserrat.className} mt-0.5 line-clamp-1 text-xs text-slate-500`}
                    >
                      {location.province} · {location.mapCode}
                    </p>
                  </div>
                  <Locate
                    className={cn(
                      "hidden size-5 shrink-0 transition lg:block",
                      isActive
                        ? "text-blue-600"
                        : "text-slate-300 group-hover:text-blue-400",
                    )}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          {/* Peta */}
          <div className="relative h-[380px] overflow-hidden rounded-3xl border border-slate-200 sm:h-[460px] lg:h-full">
            <Map
              ref={mapRef}
              theme="light"
              bounds={ALL_BOUNDS}
              fitBoundsOptions={{ padding: 80 }}
              cooperativeGestures
            >
              {locations.map((location) => {
                const style = typeStyle[location.type];
                const isActive = location.id === activeId;
                return (
                  <MapMarker
                    key={location.id}
                    longitude={location.lng}
                    latitude={location.lat}
                    onClick={() => focusLocation(location)}
                  >
                    <MarkerContent>
                      <span className="relative grid place-items-center">
                        {isActive && (
                          <span
                            className={cn(
                              "absolute size-10 animate-ping rounded-full",
                              style.ring,
                            )}
                          />
                        )}
                        <span
                          className={cn(
                            "relative grid place-items-center rounded-full border-2 border-white text-white shadow-lg transition-transform hover:scale-110",
                            style.dot,
                            isActive ? "size-8" : "size-6",
                          )}
                        >
                          <MapPin
                            className={isActive ? "size-4" : "size-3"}
                            aria-hidden
                          />
                        </span>
                      </span>
                    </MarkerContent>
                    <MarkerTooltip className={montserrat.className}>
                      {location.name}
                    </MarkerTooltip>
                  </MapMarker>
                );
              })}
            </Map>

            {/* Tombol lihat semua */}
            <button
              type="button"
              onClick={showAll}
              className={`${montserrat.className} absolute right-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:cursor-pointer hover:bg-white`}
            >
              <MapPinned className="size-4 text-blue-600" aria-hidden />
              Semua kampus
            </button>

            {/* Kartu info kampus terpilih */}
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-x-3 bottom-3 z-10 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:inset-x-auto sm:left-3 sm:max-w-sm"
              >
                <p
                  className={`${spaceGrotesk.className} text-base font-bold text-slate-900`}
                >
                  {active.name}
                </p>
                <p
                  className={`${montserrat.className} mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600`}
                >
                  {active.address}
                </p>
                <Link
                  href={active.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${montserrat.className} mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700`}
                >
                  <Navigation className="size-3.5" aria-hidden />
                  Petunjuk arah
                  <ExternalLink className="size-3" aria-hidden />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* DETAIL KAMPUS */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-2xl"
          >
            <h2
              className={`${spaceGrotesk.className} text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl`}
            >
              Kenali Setiap Kampus
            </h2>
            <p
              className={`${montserrat.className} mt-3 text-sm leading-relaxed text-slate-600 sm:text-base`}
            >
              Alamat, kapasitas, dan pembina asrama di tiap cabang.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => {
              const style = typeStyle[location.type];
              return (
                <motion.article
                  key={location.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex flex-col rounded-3xl bg-white p-2 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Foto + judul di atasnya */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-slate-100">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                    <span
                      className={cn(
                        montserrat.className,
                        "absolute left-3 top-3 rounded-full border px-3 py-1 text-xs font-semibold",
                        style.badge,
                      )}
                    >
                      {style.label}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p
                        className={`${montserrat.className} text-xs text-white/80`}
                      >
                        {location.province}
                      </p>
                      <h3
                        className={`${spaceGrotesk.className} text-2xl font-bold leading-tight text-white`}
                      >
                        {location.city}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
                    <p
                      className={`${montserrat.className} flex gap-2 text-xs leading-relaxed text-slate-500`}
                    >
                      <MapPin
                        className="mt-0.5 size-3.5 shrink-0 text-blue-600"
                        aria-hidden
                      />
                      <span className="line-clamp-2">{location.address}</span>
                    </p>

                    {/* Angka ringkas */}
                    <div className="mt-4 grid grid-cols-3 divide-x divide-slate-100 rounded-2xl bg-slate-50 py-3 text-center">
                      {[
                        { label: "Santri", value: location.students },
                        { label: "Asrama", value: location.dorms },
                        { label: "Musyrif", value: location.mushrif },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <p
                            className={`${spaceGrotesk.className} text-lg font-bold leading-none text-slate-900`}
                          >
                            {stat.value}
                          </p>
                          <p
                            className={`${montserrat.className} mt-1 text-[11px] text-slate-500`}
                          >
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Ketua asrama + aksi */}
                    <div className="mt-4 flex items-center gap-3 sm:mt-auto sm:pt-4">
                      <div className={`${montserrat.className} min-w-0 flex-1`}>
                        <p className="text-[11px] text-slate-500">
                          Kepala Asrama
                        </p>
                        <p className="truncate text-sm font-semibold text-slate-800">
                          {location.headAsrama}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => viewOnMap(location)}
                        aria-label={`Lihat ${location.name} di peta`}
                        title="Lihat di peta"
                        className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:cursor-pointer hover:border-blue-300 hover:text-blue-600"
                      >
                        <Locate className="size-4" aria-hidden />
                      </button>
                      <Link
                        href={location.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Buka ${location.name} di Google Maps`}
                        title="Buka di Google Maps"
                        className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
                      >
                        <ArrowUpRight className="size-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
