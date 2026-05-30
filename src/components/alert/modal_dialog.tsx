import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

type ModalDialogImageProps = {
  image_triger: string;
  image: string;
  title: string;
  description: string;
};

export function ModalDialogImage({
  image_triger,
  image,
  title,
  description,
}: ModalDialogImageProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="group relative w-full h-full rounded-lg overflow-hidden cursor-pointer">
          <Image
            src={image_triger}
            alt={title}
            width={1200}
            height={1200}
            quality={100}
            className="w-full h-full object-cover"
          />
          <div className=" absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Title overlay */}
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-col justify-center items-center">
          <AlertDialogTitle
            className={`${montserrat.className} font-bold text-slate-800`}
          >
            {title}
          </AlertDialogTitle>
          <Image
            src={image}
            alt={title}
            width={1200}
            height={1200}
            quality={100}
            className="rounded-lg w-full h-auto"
          />
          <AlertDialogDescription
            className={`${montserrat.className} font-light italic text-slate-800`}
          >
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:cursor-pointer">
            close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
