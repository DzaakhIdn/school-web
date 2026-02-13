import { Montserrat } from "next/font/google";
import { YoutubeIcon, FacebookIcon, InstagramIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${montserrat.className} mt-20 bg-blue-500 text-white`}>
      <div className="max-w-screen-xl mx-auto px-6 py-12 xl:px-0">
        
        {/* Main Footer Content: 4 Kolom Sejajar & Center */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          
          {/* Kolom 1: Tentang Kami */}
          <div className="flex flex-col items-center text-center">
            <h6 className="font-bold mb-4 border-b-2 border-blue-400 pb-1 w-fit">
              Tentang Kami
            </h6>
            <ul className="space-y-2 text-sm text-blue-50">
              <li><Link href="/visi-misi" className="hover:underline">Visi Misi</Link></li>
              <li><Link href="/program" className="hover:underline">Program</Link></li>
              <li><Link href="/galeri" className="hover:underline">Galeri</Link></li>
              <li><Link href="/testimoni" className="hover:underline">Testimoni</Link></li>
            </ul>
          </div>

          {/* Kolom 2: Part of Us */}
          <div className="flex flex-col items-center text-center">
            <h6 className="font-bold mb-4 border-b-2 border-blue-400 pb-1 w-fit">
              Kami Bekerja Sama Dengan
            </h6>
            <ul className="space-y-2 text-sm text-blue-50">
              <li><Link href="#" className="hover:underline">HSI Abdullah Roy</Link></li>
              <li><Link href="#" className="hover:underline">Markaz Mulazamah Yassalam</Link></li>
              <li><Link href="#" className="hover:underline">Global English</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Lokasi Kami (Sekarang Sejajar di Atas) */}
          <div className="flex flex-col items-center text-center">
            <h6 className="font-bold mb-4 border-b-2 border-blue-400 pb-1 w-fit">
              Lokasi Kami
            </h6>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-blue-50 leading-relaxed max-w-[200px]">
                2QJP+M6X, RT.03/RW.08, Cikembar, Kec. Cikembar, Kabupaten Sukabumi, Jawa Barat 43157
              </p>
            </div>
          </div>

          {/* Kolom 4: Ikuti Kami */}
          <div className="flex flex-col items-center text-center">
            <h6 className="font-bold mb-4 border-b-2 border-blue-400 pb-1 w-fit">
              Ikuti Kami
            </h6>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/hsi.boardingschool/" target="_blank" className="hover:scale-110 transition-transform">
                <InstagramIcon size={24} />
              </Link>
              <Link href="https://web.facebook.com/profile.php?id=61586171438715&locale=id_ID" target="_blank" className="hover:scale-110 transition-transform">
                <FacebookIcon size={24} />
              </Link>
              <Link href="" target="_blank" className="hover:scale-110 transition-transform">
                <YoutubeIcon size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Hanya Separator dan Copyright */}
        <div className="mt-12">
          <Separator className="mb-8 bg-blue-400" />
          <div className="text-center">
            <p className="text-xs text-blue-200 italic">
              &copy; {currentYear} HSI Boarding School. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;