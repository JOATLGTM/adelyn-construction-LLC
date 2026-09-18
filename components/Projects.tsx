"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

const projects = [
  {
    title: "Kitchen remodel",
    image: "/images/project-kitchen.jpg",
    alt: "Remodeled kitchen with a marble island and white cabinets",
  },
  {
    title: "Finished basement",
    image: "/images/project-basement.jpg",
    alt: "Freshly finished room with new hardwood flooring",
  },
  {
    title: "Tiled walk-in shower",
    image: "/images/project-shower.jpg",
    alt: "Walk-in shower with large-format tile",
  },
  {
    title: "Commercial build-out",
    image: "/images/project-commercial.jpg",
    alt: "Exterior of a modern commercial building",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-base-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle title="Recent Projects" />

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.li
                className="group relative aspect-[3/2] overflow-hidden rounded-md bg-base-200"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  className="relative h-full w-full"
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
                <motion.span
                  variants={{ rest: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 font-display text-lg font-bold uppercase tracking-wide text-white"
                >
                  {project.title}
                </motion.span>
              </motion.li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
