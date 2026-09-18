"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

const services = [
  {
    title: "New Construction",
    description: "From the ground up.",
    image: "/images/service-new-construction.jpg",
    alt: "Worker on the wood frame of a new house under construction",
  },
  {
    title: "Remodeling",
    description: "Kitchens, bathrooms, basements & more.",
    image: "/images/service-remodeling.jpg",
    alt: "Bright remodeled kitchen with white cabinets",
  },
  {
    title: "Interior & Exterior Finishes",
    description: "Drywall, painting, flooring and more.",
    image: "/images/service-finishes.jpg",
    alt: "Paint roller and tray during an interior painting job",
  },
  {
    title: "Repairs & Maintenance",
    description: "Small jobs to major fixes.",
    image: "/images/service-repairs.jpg",
    alt: "Claw hammer on a wooden workbench",
  },
  {
    title: "Commercial Work",
    description: "Offices, retail, tenant build-outs.",
    image: "/images/service-commercial.jpg",
    alt: "Glass-fronted commercial office building",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-base-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          title="Our Services"
          subtitle="From small repairs to full construction, we do it all."
        />

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <li className="card h-full bg-base-100">
                <motion.figure
                  className="aspect-[4/3] w-full overflow-hidden rounded-md"
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
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </motion.figure>
                <div className="card-body items-center px-1 py-4 text-center">
                  <h3 className="card-title font-display text-xl font-extrabold uppercase leading-tight tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm text-base-content/75">{service.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
