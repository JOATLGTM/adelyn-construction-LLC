import { Reveal } from "@/components/Reveal";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  /** Light text for dark backgrounds. */
  light?: boolean;
};

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : "text-left"}>
      <h2
        className={`font-display text-4xl font-extrabold uppercase tracking-wide sm:text-[2.6rem] ${
          light ? "text-white" : "text-base-content"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-2 h-1 w-16 rounded-full bg-primary ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg ${
            light ? "text-white/85" : "text-base-content/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
