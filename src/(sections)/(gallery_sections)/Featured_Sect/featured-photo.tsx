"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FeaturedPhotoProps = {
  src?: string;
  alt?: string;
};

/**
 * Satu foto lebar dengan sudut membulat. Saat masuk layar, foto perlahan
 * zoom-out supaya terasa hidup tanpa mengganggu.
 */
const FeaturedPhoto = ({
  src = "/assets/thumbnail/page_gallery/tadabur_alam.JPG",
  alt = "Kebersamaan santri HSI Boarding School saat Tadabur Alam",
}: FeaturedPhotoProps) => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto aspect-[16/10] max-w-6xl overflow-hidden rounded-2xl sm:aspect-[16/8] sm:rounded-3xl lg:aspect-[16/7]"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedPhoto;
