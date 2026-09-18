import type { ComponentType, SVGProps } from "react";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

type Item = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  note?: string;
  href: string;
  tone: "primary" | "error";
  external?: boolean;
};

const items: Item[] = [
  {
    icon: PhoneIcon,
    label: "Call us any time",
    value: site.phone,
    href: site.phoneHref,
    tone: "primary",
  },
  {
    icon: ClockIcon,
    label: "24/7",
    value: "Emergency Service Call",
    note: "We're here when you need us",
    href: site.phoneHref,
    tone: "error",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    tone: "primary",
  },
];

export function ContactBar() {
  return (
    <section id="contact" className="bg-neutral py-10 text-neutral-content">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="sr-only">Contact {site.name}</h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-white/15">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isError = item.tone === "error";
            return (
              <Reveal
                key={item.label}
                delay={i * 0.1}
                className="lg:px-6 first:lg:pl-0 last:lg:pr-0"
              >
                <li>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4"
                  >
                    <span
                      className={`flex size-14 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105 ${
                        isError
                          ? "border-[3px] border-error text-error"
                          : "bg-primary text-primary-content"
                      }`}
                    >
                      <Icon className="size-7" strokeWidth={2.5} />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span
                        className={`font-display uppercase tracking-wide ${
                          isError
                            ? "text-2xl font-black text-error"
                            : "text-sm font-semibold text-white/85"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`font-display font-extrabold uppercase tracking-wide ${
                          isError ? "text-lg" : "text-xl sm:text-2xl"
                        } break-all`}
                      >
                        {item.value}
                      </span>
                      {item.note && (
                        <span className="text-xs font-semibold uppercase tracking-wide text-error">
                          {item.note}
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
