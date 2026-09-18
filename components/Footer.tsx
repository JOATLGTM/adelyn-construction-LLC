import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-4 border-primary bg-[#080d0a] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between">
        <Link href="#home" className="text-center leading-none lg:text-left">
          <span className="block font-display text-3xl font-black tracking-wide text-primary">
            ADELYN
          </span>
          <span className="block font-display text-xl font-bold tracking-wide">
            CONSTRUCTION LLC
          </span>
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 text-sm font-medium">
            {site.nav.map((item, i) => (
              <li key={item.href} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/30">|</span>}
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="-rotate-3 font-script text-2xl text-primary">
          Building a Better Tomorrow
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-4 text-xs text-white/70 sm:px-6 lg:flex-row lg:justify-between">
          <p>
            &copy; {year} {site.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-3">
            <span>Licensed</span>
            <span className="text-white/30">|</span>
            <span>Insured</span>
            <span className="text-white/30">|</span>
            <span>Columbus, Ohio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
