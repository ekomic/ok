import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "King's City Estate | Premium Real Estate in Abuja",
  description:
    "Discover luxury homes, premium land, and bespoke builds across Maitama, Wuse, Guzape, Jabi and beyond. Abuja's most trusted real estate company.",
  keywords: "real estate Abuja, luxury homes Nigeria, property for sale Abuja, Maitama, Guzape, Wuse",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "King's City Estate | Premium Real Estate in Abuja",
    description: "Own a piece of Abuja's finest. 500+ homes delivered across 15 locations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
