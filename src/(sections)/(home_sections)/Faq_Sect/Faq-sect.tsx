"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { montserrat, spaceGrotesk } from "@/lib/fonts";

/** Nomor WhatsApp resmi (dipakai juga di halaman /contact). */
const WHATSAPP_NUMBER = "6289524513151";

/** FAQ disusun dari data yang sudah ada: visi, jenjang K10-K12, 4 pilar, kampus. */
const faqs = [
  {
    question: "Apa itu HSI Boarding School?",
    answer:
      "HSI Boarding School adalah sekolah Islam berbasis asrama yang membentuk generasi bertauhid, berakhlaq Qurani, serta berdaya saing global. Kami memadukan pendidikan Al-Qur'an & ilmu syar'i, tahfidz, kecakapan trilingual, dan teknologi informasi dalam lingkungan asrama yang Islami.",
  },
  {
    question: "Kelas apa saja yang tersedia?",
    answer:
      "Jenjang berjalan dari Kelas 10 (Mulazamah), Kelas 11 (Hifdzul Mutun), hingga Kelas 12 (HSI Akademik). Setiap jenjang punya target tahfidz, hafalan hadits, penguasaan bahasa, dan proyek teknologi yang bertahap.",
  },
  {
    question: "Apa saja program unggulannya?",
    answer:
      "Empat pilar: Diniyyah & Tahfidz (mutqin 6–9 juz plus 50 Hadits Arba'in), Teknologi Fullstack (dari HTML hingga Marketplace Islami live), Bahasa Arab & Inggris sebagai alat kerja, serta Karakter & Kesiswaan lewat Agile Mindset dan leadership.",
  },
  {
    question: "Di mana lokasi sekolah?",
    answer:
      "Kami memiliki tiga kampus: Sukabumi (kampus utama), Purworejo, dan Bekasi. Setiap cabang dilengkapi asrama, ruang belajar, dan ruang ibadah dengan pendampingan ustadz serta ustadzah.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Pendaftaran dilakukan melalui portal PSB resmi HSI Boarding School di psb.smaithsi.sch.id. Tim admisi kami juga siap membantu عبر WhatsApp bila ada pertanyaan lebih lanjut.",
  },
];

const entrance = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/**
 * Section FAQ: panel besar berisi judul + form "masih punya pertanyaan" di kiri,
 * dan daftar akordeon di kanan.
 * Aturan radius konsentris: panel 40px = padding 24px + kartu putih 16px.
 */
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [question, setQuestion] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = question.trim();
    if (!message) return;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Halo HSI Boarding School, saya mau bertanya: ${message}`
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...entrance(0)}
          className="rounded-[2.5rem] bg-slate-50 p-6 ring-1 ring-slate-100 lg:p-6"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
            {/* Kolom kiri: badge, judul, form */}
            <div className="flex flex-col">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-600">
                <Sparkles className="size-3.5" aria-hidden />
                FAQ
              </span>

              <h2
                className={cn(
                  "mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl",
                  spaceGrotesk.className
                )}
              >
                Pertanyaan yang Sering Diajukan?
              </h2>

              {/* Kartu "masih punya pertanyaan" */}
              <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 lg:mt-auto lg:pt-6">
                <h3
                  className={cn(
                    "text-base font-bold text-slate-900",
                    spaceGrotesk.className
                  )}
                >
                  Masih punya pertanyaan?
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed text-slate-600",
                    montserrat.className
                  )}
                >
                  Belum menemukan jawabannya? Tulis pertanyaan Anda di bawah —
                  tim kami akan membantu lewat WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 pl-4 transition-colors focus-within:border-blue-400">
                    <input
                      type="text"
                      value={question}
                      onChange={(event) => setQuestion(event.target.value)}
                      placeholder="Tulis pertanyaan..."
                      aria-label="Tulis pertanyaan"
                      className={cn(
                        "min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400",
                        montserrat.className
                      )}
                    />
                    <button
                      type="submit"
                      aria-label="Kirim pertanyaan"
                      className="grid size-9 shrink-0 place-items-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 hover:cursor-pointer"
                    >
                      <Send className="size-4" aria-hidden />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Kolom kanan: akordeon */}
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 transition-shadow duration-300 hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span
                        className={cn(
                          "text-sm font-semibold text-slate-900",
                          spaceGrotesk.className
                        )}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          "grid size-8 shrink-0 place-items-center rounded-full transition-colors duration-300",
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        )}
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-300",
                            isOpen && "rotate-180"
                          )}
                          aria-hidden
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <p
                            className={cn(
                              "px-5 pb-5 text-sm leading-relaxed text-slate-600",
                              montserrat.className
                            )}
                          >
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <p
                className={cn(
                  "pt-2 text-center text-xs text-slate-500",
                  montserrat.className
                )}
              >
                Pendaftaran dibuka setiap tahun —{" "}
                <Link
                  href="https://psb.smaithsi.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 underline underline-offset-4 hover:cursor-pointer"
                >
                  cek portal PSB
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
