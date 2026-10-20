import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#4A1525",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sjentertainmentchoreography.com"),
  title: {
    template: "%s | SJ Entertainment Choreography",
    default: "SJ Entertainment Choreography | Sajid & Joya | Wedding Choreography Across India",
  },
  description:
    "Bespoke wedding choreography, grand couple entries, and entertainment by Sajid & Joya. Creating elegant, memorable celebration moments across India.",
  keywords: [
    "Wedding Choreography",
    "Sajid and Joya",
    "SJ Entertainment Choreography",
    "Couple Dance Choreography",
    "Couple Entries",
    "Sangeet Choreography India",
    "Destination Wedding Choreography",
  ],
  authors: [{ name: "Sajid & Joya" }],
  openGraph: {
    title: "SJ Entertainment Choreography | Sajid & Joya",
    description:
      "Bespoke wedding choreography, grand couple entries, and entertainment by Sajid & Joya across India.",
    type: "website",
    locale: "en_IN",
    siteName: "SJ Entertainment Choreography",
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ Entertainment Choreography | Sajid & Joya",
    description:
      "Bespoke wedding choreography, grand couple entries, and entertainment by Sajid & Joya across India.",
  },
  robots: {
    index: process.env.NODE_ENV === "production" && Boolean(process.env.NEXT_PUBLIC_SITE_URL),
    follow: process.env.NODE_ENV === "production" && Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#221E1F] font-sans antialiased selection:bg-[#4A1525] selection:text-[#FAF7F2]">
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


