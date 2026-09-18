import Image from "next/image";
import { GearIcon, PeopleIcon, QuoteIcon, ShieldIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const badges = [
  { icon: ShieldIcon, lines: ["Licensed", "& Insured"] },
  { icon: PeopleIcon, lines: ["Reliable", "& On Time"] },
  { icon: GearIcon, lines: ["Quality", "Workmanship"] },
];

export function About() {
  return (
    <section id="about" className="grid bg-neutral text-neutral-content lg:grid-cols-2">
      <div className="mx-auto flex w-full max-w-3xl flex-col justify-center px-4 py-14 sm:px-6 lg:ml-auto lg:mr-0 lg:max-w-[40rem] lg:px-12 lg:py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
            About {site.name}
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Owned and operated by{" "}
            <span className="font-semibold text-primary">{site.owner}</span>,{" "}
            {site.name} is a Columbus, Ohio based company committed to quality
            workmanship, honest service, and customer satisfaction. With years of
            hands-on experience, we handle every project with care, big or small.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {badges.map(({ icon: Icon, lines }, i) => (
            <Reveal key={lines.join(" ")} delay={0.2 + i * 0.1}>
              <li className="flex items-center gap-4">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full border-[3px] border-primary text-primary">
                  <Icon className="size-8" />
                </span>
                <span className="font-display text-lg font-bold uppercase leading-tight tracking-wide">
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
        <Image
          src="/images/about-bathroom.jpg"
          alt="Renovated bathroom with a frameless glass shower"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <Reveal
          x={40}
          y={0}
          delay={0.2}
          className="absolute bottom-10 right-0 max-w-xs bg-black/85 p-6 text-white shadow-2xl backdrop-blur-sm sm:bottom-16 sm:max-w-sm"
        >
          <QuoteIcon className="size-8 text-primary" />
          <p className="mt-1 font-display text-2xl font-semibold italic leading-snug">
            Honest Work.
            <br />
            Lasting Results.
          </p>
          <p className="mt-3 text-sm text-white/85">
            &mdash; {site.owner}
            <span className="block pl-4">Owner</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
