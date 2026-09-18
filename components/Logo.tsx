import Link from "next/link";

type LogoProps = {
  /** Show the "Residential • Commercial • Remodel • Repair" line under the wordmark. */
  tagline?: boolean;
  className?: string;
};

export function LogoMark({ className = "h-12 w-14" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 56"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* chimney */}
      <rect x="44" y="9" width="7" height="12" className="fill-primary" />
      {/* roof */}
      <path d="M5 31 L32 7 L59 31" className="stroke-primary" strokeWidth="7" />
      {/* house body */}
      <path d="M14 29 V51 H50 V29" stroke="currentColor" strokeWidth="5" />
      {/* door */}
      <rect x="27" y="36" width="10" height="15" fill="currentColor" />
    </svg>
  );
}

export function Logo({ tagline = false, className = "" }: LogoProps) {
  return (
    <Link
      href="#home"
      aria-label="Adelyn Construction LLC — home"
      className={`inline-flex flex-col text-white ${className}`}
    >
      <span className="flex items-center gap-2">
        <LogoMark />
        <span className="flex flex-col leading-none">
          <span className="font-display text-[2.1rem] font-black tracking-wide">
            ADELYN
          </span>
          <span className="font-display text-[0.8rem] font-semibold tracking-[0.28em]">
            CONSTRUCTION LLC
          </span>
        </span>
      </span>
      {tagline && (
        <span className="mt-1.5 hidden flex-wrap items-center gap-x-2 font-display sm:flex text-[0.72rem] font-bold tracking-[0.12em] text-white/90">
          <span>RESIDENTIAL</span>
          <Dot />
          <span>COMMERCIAL</span>
          <Dot />
          <span>REMODEL</span>
          <Dot />
          <span>REPAIR</span>
        </span>
      )}
    </Link>
  );
}

function Dot() {
  return <span className="inline-block size-1.5 rounded-full bg-primary" />;
}
