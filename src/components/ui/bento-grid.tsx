import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid max-w-7xl mx-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[24rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  imageAlt,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image: string;
  imageAlt?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white border border-gray-200/60 shadow-sm transition-all duration-500 hover:border-blue-300/50 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer",
        "hover:-translate-y-2 hover:scale-[1.02] focus-visible:border-blue-500 focus-visible:ring-blue-500/20 focus-visible:ring-4",
        "dark:bg-gray-900 dark:border-gray-800/60 dark:hover:border-blue-600/40",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt || ""}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Header Content */}
      {header && (
        <div className="absolute top-6 left-6 right-6 z-10">{header}</div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6">
        {/* Icon */}
        {icon && (
          <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 text-gray-700 shadow-lg transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white group-hover:border-blue-400/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/25">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 leading-tight transition-all duration-300 group-hover:text-blue-100 drop-shadow-lg">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/90 leading-relaxed line-clamp-3 transition-all duration-300 group-hover:text-white drop-shadow-sm">
          {description}
        </p>
      </div>

      {/* Blue to Yellow Gradient Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

      {/* Yellow Accent Corner */}
      <div className="absolute top-5 right-5 w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125 shadow-lg shadow-yellow-400/50" />

      {/* Blue Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm" />

      {/* Bottom Blue Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
