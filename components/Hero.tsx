"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";

const headline = ["BUILD", "REPAIR", "IMPROVE"];
const promises = ["Fast Response", "Reliable", "Professional", "Quality Work"];

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-neutral text-white lg:min-h-[720px]"
    >
      <motion.div
        className="absolute inset-0 -z-20"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-house.jpg"
          alt="Modern home exterior glowing with warm lights at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </motion.div>
      {/* Legibility gradients over the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral/95 via-neutral/70 to-neutral/20" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-neutral/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-neutral/80 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 pt-40 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-16">
        <div className="max-w-xl">
          <motion.p
            {...fadeUp(0.1)}
            className="font-display text-sm font-semibold tracking-[0.35em] text-white/85"
          >
            QUALITY <span className="mx-2 text-white/40">|</span> TRUST{" "}
            <span className="mx-2 text-white/40">|</span> EXPERIENCE
          </motion.p>

          <h1 className="mt-3 font-display text-[4.6rem] font-black leading-[0.86] tracking-wide sm:text-[5.6rem] lg:text-[6.4rem]">
            {headline.map((word, i) => (
              <motion.span
                key={word}
                className="block"
                initial={reduce ? false : { opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...fadeUp(0.6)}
            className="mt-3 font-display text-2xl font-bold tracking-wide text-primary sm:text-3xl"
          >
            YOUR VISION. OUR EXPERTISE.
          </motion.p>

          <motion.p {...fadeUp(0.7)} className="mt-4 max-w-md text-lg text-white/90">
            {site.name} provides reliable, high-quality construction services for
            residential and commercial projects in {site.serviceArea} and
            surrounding areas.
          </motion.p>

          <motion.div {...fadeUp(0.85)} className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.phoneHref}
              className="btn btn-outline h-auto gap-3 rounded-lg border-2 border-white px-6 py-3 font-display text-xl font-bold tracking-wide text-white hover:border-primary hover:bg-primary hover:text-primary-content"
            >
              GET A FREE ESTIMATE
              <ArrowRightIcon className="size-6" />
            </a>
            <a
              href={site.phoneHref}
              className="btn btn-primary h-auto gap-3 rounded-lg px-6 py-3 shadow-lg shadow-primary/30"
            >
              <PhoneIcon className="size-8" />
              <span className="flex flex-col items-start leading-none">
                <span className="font-display text-base font-bold tracking-wide">
                  CALL NOW
                </span>
                <span className="font-display text-3xl font-black tracking-wide">
                  {site.phone}
                </span>
              </span>
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block lg:pb-2"
        >
          <p className="relative -rotate-6 font-script text-6xl text-white drop-shadow-lg">
            <span className="block">Service Call</span>
            <span className="block pl-12">24/7</span>
            <svg
              viewBox="0 0 220 24"
              className="absolute -bottom-3 left-8 h-6 w-56"
              aria-hidden="true"
            >
              <motion.path
                d="M4 18 C 60 6, 150 4, 216 10"
                fill="none"
                className="stroke-primary"
                strokeWidth="6"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              />
            </svg>
          </p>
          <ul className="mt-12 space-y-2.5 text-lg font-medium">
            {promises.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3"
                initial={reduce ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
              >
                <CheckIcon className="size-6 text-primary" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
