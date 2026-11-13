"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Headset,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import AuroraBackground from "@/components/ui/aurora-background";

interface CabangData {
  id: string;
  nama: string;
  kota: string;
  provinsi: string;
  tipe: "ikhwan" | "akhwat";
  nomor: string;
  email: string;
  image: string;
  mapsLink: string;
}

interface SocialLink {
  name: string;
  icon: LucideIcon;
  link: string;
  username: string;
  accent: string;
}

const EMAIL = "boardingschool@hsi.id";
const MAIN_WA = "089524513151";
const PSB_LINK = "https://psb.hsiboardingschool.id/auth/auth-user";

const cabangData: CabangData[] = [
  {
    id: "sukabumi",
    nama: "HSI Boarding School Sukabumi",
    kota: "Sukabumi",
    provinsi: "Jawa Barat",
    tipe: "ikhwan",
    nomor: "089623039600",
    email: EMAIL,
    image: "/assets/location/sukabumi.jpg",
    mapsLink: "https://maps.app.goo.gl/rTqp7sD5zuHQmyKJ8",
  },
  {
    id: "purworejo",
    nama: "HSI Boarding School Purworejo",
    kota: "Purworejo",
    provinsi: "Jawa Tengah",
    tipe: "ikhwan",
    nomor: "085126184921",
    email: EMAIL,
    image: "/assets/location/purworejo.jpg",
    mapsLink: "https://maps.app.goo.gl/aJNLHrHHsnefLFfk6",
  },
  {
    id: "bekasi",
    nama: "HSI Boarding School Bekasi",
    kota: "Bekasi",
    provinsi: "Jawa Barat",
    tipe: "akhwat",
    nomor: "089524513151",
    email: EMAIL,
    image: "/assets/location/bekasi.jpg",
    mapsLink: "https://maps.app.goo.gl/1qtVUquDzGT5HPrt5",
  },
];

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/hsiboardingschool",
    username: "@hsiboardingschool",
    accent: "bg-pink-50 text-pink-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    link: "https://youtube.com/@HSI-BOARDING-SCHOOL",
    username: "HSI BOARDING SCHOOL",
    accent: "bg-red-50 text-red-600",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://linkedin.com/company/hsi-boarding-school",
    username: "HSI Boarding School",
    accent: "bg-sky-50 text-sky-700",
  },
];

const topics = ["Pendaftaran", "Program", "Kunjungan", "Lainnya"] as const;

/** "089524513151" → "6289524513151" */
const toWa = (nomor: string) => `62${nomor.replace(/^0/, "")}`;

/** "089524513151" → "+62 895-2451-3151" */
const formatPhone = (nomor: string) => {
  const n = nomor.replace(/^0/, "");
  return `+62 ${n.slice(0, 3)}-${n.slice(3, 7)}-${n.slice(7)}`;
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
    <h2
      className={cn(
        spaceGrotesk.className,
        "text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
      )}
    >
      {title}
    </h2>
    <p className={cn(montserrat.className, "mt-3 text-sm leading-relaxed text-slate-600 sm:text-base")}>
      {subtitle}
    </p>
  </motion.div>
);

const CopyButton = ({ value, label }: { value: string; label: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard tidak tersedia — abaikan */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} tersalin` : `Salin ${label}`}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-blue-300 hover:text-blue-600"
    >
      {copied ? <Check className="size-4 text-green-600" /> : <Copy className="size-4" />}
    </button>
  );
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [cabangId, setCabangId] = useState(cabangData[0].id);
  const [topic, setTopic] = useState<(typeof topics)[number]>("Pendaftaran");
  const [message, setMessage] = useState("");

  const selectedCabang = cabangData.find((c) => c.id === cabangId) ?? cabangData[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      "Assalamu'alaikum, admin HSI Boarding School.",
      "",
      `Nama: ${name.trim()}`,
      `Kampus: ${selectedCabang.kota}`,
      `Keperluan: ${topic}`,
      "",
      message.trim(),
    ].join("\n");
    window.open(
      `https://wa.me/${toWa(selectedCabang.nomor)}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const quickContacts = [
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      copy: EMAIL,
      accent: "bg-blue-50 text-blue-600",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: formatPhone(MAIN_WA),
      href: `https://wa.me/${toWa(MAIN_WA)}`,
      copy: formatPhone(MAIN_WA),
      accent: "bg-green-50 text-green-600",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin – Jumat, 07:30 – 17:00 WIB",
      accent: "bg-amber-50 text-amber-600",
    },
  ];

  const inputClass = cn(
    montserrat.className,
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
  );
  const labelClass = cn(montserrat.className, "mb-1.5 block text-xs font-semibold text-slate-600");

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
            <Headset className="size-3.5" aria-hidden />
            Hubungi Kami
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`${spaceGrotesk.className} mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl`}
          >
            Siap Membantu Anda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className={`${montserrat.className} mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base`}
          >
            Punya pertanyaan seputar pendaftaran, program pembelajaran, atau kunjungan kampus? Tim kami siap
            menjawab.
          </motion.p>
        </div>

        {/* Kontak cepat */}
        <div className="relative mx-auto mt-12 grid max-w-5xl gap-3 sm:gap-4 md:grid-cols-3">
          {quickContacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.07 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur sm:p-5"
              >
                <span className={cn("grid size-11 shrink-0 place-items-center rounded-xl", item.accent)}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={cn(montserrat.className, "text-xs font-medium text-slate-500")}>{item.label}</p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={cn(
                        spaceGrotesk.className,
                        "block truncate text-[15px] font-semibold text-slate-900 hover:text-blue-600"
                      )}
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className={cn(spaceGrotesk.className, "text-[15px] font-semibold text-slate-900")}>
                      {item.value}
                    </p>
                  )}
                </div>
                {item.copy && <CopyButton value={item.copy} label={item.label} />}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* KONTAK PER KAMPUS */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Kontak Per Kampus"
            subtitle="Hubungi admin kampus terdekat untuk informasi yang lebih detail."
          />

          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {cabangData.map((cabang, index) => (
              <motion.article
                key={cabang.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={cabang.image}
                    alt={cabang.nama}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <span
                    className={cn(
                      montserrat.className,
                      "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                      cabang.tipe === "ikhwan" ? "bg-blue-100 text-blue-700" : "bg-pink-100 text-pink-700"
                    )}
                  >
                    Santri {cabang.tipe === "ikhwan" ? "Ikhwan" : "Akhwat"}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className={cn(spaceGrotesk.className, "text-xl font-bold leading-tight text-white")}>
                      {cabang.kota}
                    </p>
                    <p className={cn(montserrat.className, "text-xs text-white/80")}>{cabang.provinsi}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <Phone className="size-4 shrink-0 text-slate-400" aria-hidden />
                    <span className={cn(spaceGrotesk.className, "flex-1 font-semibold text-slate-900")}>
                      {formatPhone(cabang.nomor)}
                    </span>
                    <CopyButton value={formatPhone(cabang.nomor)} label={`nomor ${cabang.kota}`} />
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 shrink-0 text-slate-400" aria-hidden />
                    <Link
                      href={`mailto:${cabang.email}`}
                      className={cn(montserrat.className, "truncate text-sm text-slate-600 hover:text-blue-600")}
                    >
                      {cabang.email}
                    </Link>
                  </div>

                  <div className="mt-auto flex gap-2 pt-2">
                    <Link
                      href={`https://wa.me/${toWa(cabang.nomor)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        montserrat.className,
                        "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                      )}
                    >
                      <MessageCircle className="size-4" aria-hidden />
                      Chat WhatsApp
                    </Link>
                    <Link
                      href={cabang.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buka lokasi ${cabang.kota} di Google Maps`}
                      className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600"
                    >
                      <MapPin className="size-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* KIRIM PESAN + MEDIA SOSIAL */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Kirim Pesan"
            subtitle="Isi formulir singkat ini — pesan Anda akan langsung terkirim ke WhatsApp admin kampus yang dipilih."
          />

          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <motion.form
              {...fadeUp}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-cabang" className={labelClass}>
                    Kampus tujuan
                  </label>
                  <select
                    id="contact-cabang"
                    value={cabangId}
                    onChange={(e) => setCabangId(e.target.value)}
                    className={inputClass}
                  >
                    {cabangData.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.kota} ({c.tipe === "ikhwan" ? "Ikhwan" : "Akhwat"})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <fieldset className="mt-4">
                <legend className={labelClass}>Keperluan</legend>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      aria-pressed={topic === t}
                      className={cn(
                        montserrat.className,
                        "rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
                        topic === t
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-4">
                <label htmlFor="contact-message" className={labelClass}>
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pertanyaan Anda di sini…"
                  className={cn(inputClass, "resize-none")}
                />
              </div>

              <button
                type="submit"
                className={cn(
                  montserrat.className,
                  "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
                )}
              >
                <Send className="size-4" aria-hidden />
                Kirim via WhatsApp
              </button>
            </motion.form>

            <div className="flex flex-col gap-5">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <p className={cn(spaceGrotesk.className, "text-lg font-bold text-slate-900")}>
                  Ikuti Media Sosial Kami
                </p>
                <p className={cn(montserrat.className, "mt-1 text-sm text-slate-600")}>
                  Update kegiatan dan cerita santri setiap hari.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-2xl border border-slate-100 p-3 transition-colors hover:border-blue-200 hover:bg-blue-50/40"
                      >
                        <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", social.accent)}>
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className={cn(spaceGrotesk.className, "text-sm font-semibold text-slate-900")}>
                            {social.name}
                          </p>
                          <p className={cn(montserrat.className, "truncate text-xs text-slate-500")}>
                            {social.username}
                          </p>
                        </div>
                        <ArrowUpRight
                          className="size-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                          aria-hidden
                        />
                      </Link>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="rounded-3xl bg-blue-600 p-5 text-white sm:p-6"
              >
                <p className={cn(spaceGrotesk.className, "text-lg font-bold")}>Siap bergabung dengan HSIBS?</p>
                <p className={cn(montserrat.className, "mt-1 text-sm text-blue-100")}>
                  Pendaftaran santri baru dilakukan secara online.
                </p>
                <Link
                  href={PSB_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    montserrat.className,
                    "mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                  )}
                >
                  Mulai Pendaftaran
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
