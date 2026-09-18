"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Logo } from "@/components/Logo";
import { ClockIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = site.nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    // The contact section is short, so treat reaching the page bottom as "Contact".
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) setActive("#contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu when the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-neutral/95 shadow-lg shadow-black/30 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="navbar mx-auto max-w-7xl gap-4 px-4 py-3 sm:px-6">
        <div className="flex-1">
          <Logo tagline />
        </div>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative pb-1.5 text-[0.95rem] font-semibold transition-colors ${
                      isActive ? "text-primary" : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="btn btn-primary rounded-full px-5 font-display text-lg font-bold tracking-wide"
          >
            <PhoneIcon className="size-5" />
            {site.phone}
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-md bg-error px-3 py-2 text-error-content shadow-lg shadow-black/30 transition-transform hover:scale-[1.03]"
          >
            <ClockIcon className="size-8 shrink-0" strokeWidth={2.5} />
            <span className="flex flex-col items-center leading-none">
              <span className="font-display text-2xl font-black">24/7</span>
              <span className="font-display text-base font-extrabold tracking-wide">
                EMERGENCY
              </span>
              <span className="font-display text-base font-extrabold tracking-wide">
                SERVICE CALL
              </span>
              <span className="mt-0.5 text-[0.55rem] font-bold tracking-wider">
                WE&apos;RE HERE WHEN YOU NEED US
              </span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            className="btn btn-primary btn-circle"
            aria-label={`Call ${site.phone}`}
          >
            <PhoneIcon className="size-5" />
          </a>
          <button
            type="button"
            className="btn btn-ghost btn-square text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <ul className="menu w-full gap-1 px-4 py-4 text-lg font-semibold text-white">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={active === item.href ? "text-primary" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={site.phoneHref}
                  className="bg-error text-error-content hover:bg-error/90"
                >
                  <ClockIcon className="size-5" />
                  24/7 Emergency Service Call
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
