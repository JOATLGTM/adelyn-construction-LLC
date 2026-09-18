import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${site.name} | Residential & Commercial Construction in Columbus, OH`,
  description:
    "Adelyn Construction LLC provides reliable, high-quality construction, remodeling and repair services for residential and commercial projects in Columbus, OH and surrounding areas. 24/7 emergency service call.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="adelyn"
      className={`${inter.variable} ${barlowCondensed.variable} ${kaushanScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
