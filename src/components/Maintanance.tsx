import { Button } from "@/components/ui/button";
import { ArrowUpRight, Wrench, Clock, Home } from "lucide-react";
import { BackgroundPattern } from "@/components/Hero/background-pattern";
import { motion } from "framer-motion";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import Link from "next/link";



const Maintenance = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <BackgroundPattern />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-12 h-12 bg-blue-400/20 rounded-full blur-lg"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-yellow-200"
        >
          <Clock className="w-4 h-4 animate-pulse" />
          Sedang Dalam Pengembangan
        </motion.div>

        {/* Main Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Wrench className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1
            className={`${spaceGrotesk.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold !leading-[1.1] tracking-tight text-slate-900 mb-6`}
          >
            Halaman Sedang{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Dikembangkan
            </span>
          </h1>

          <p
            className={`${montserrat.className} text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto`}
          >
            Kami sedang bekerja keras untuk menghadirkan halaman{" "}
            <span className="font-semibold text-blue-600">{title}</span> yang
            lebih informatif dan menarik untuk Anda.
          </p>

          <p
            className={`${montserrat.className} text-sm sm:text-base text-slate-500 mb-12`}
          >
            Terima kasih atas kesabaran Anda. Halaman ini akan segera tersedia!
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/home">
            <Button
              size="lg"
              className={`${montserrat.className} rounded-full text-base font-semibold px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
            >
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className={`${montserrat.className} rounded-full text-base font-semibold px-8 py-3 border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 shadow-none hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}
            >
              Hubungi Kami <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Estimated Time */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 p-4 bg-blue-50 rounded-xl border border-blue-100"
        >
          <p className={`${montserrat.className} text-sm text-blue-700`}>
            <span className="font-semibold">Perkiraan selesai:</span> 2-3 hari
            kerja
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Maintenance;
