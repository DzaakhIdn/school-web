import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { BrandLogo } from "./logo";
import { NavMenu } from "./nav-menu";
import { navCta } from "./nav-items";

/** Menu mobile: trigger ikon di navbar pill + sheet berisi tautan dan CTA. */
export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-slate-200 hover:cursor-pointer"
          aria-label="Buka menu navigasi"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex items-center gap-3">
          <BrandLogo className="w-9" />
          <span className="text-lg font-bold text-blue-600">
            HSI Boarding School
          </span>
        </div>
        <NavMenu orientation="vertical" className="mt-8" />
        <div className="mt-auto pb-3">
          <Button
            asChild
            className="w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"
          >
            <Link href={navCta.href}>{navCta.title}</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
