import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Editorial / Long-form
const tiemposText = localFont({
  src: [
    {
      path: "../public/fonts/Tiempos Text/Tiempos Text Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Tiempos Text/Tiempos Text Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tiempos",
});

// Display / Brand Statements
const neueHaasDisplay = localFont({
  src: [
    {
      path: "../public/fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplay-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Haas Grotesk Display Pro/NeueHaasDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
});

// UI / Interface Copy
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"], // Regular, Medium
});

// Data / Technical References
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400"], // Regular only
});

export const metadata: Metadata = {
  title: "Converge Finance",
  description:
    "Converge turns messy loan files into credit-ready decisions before your LOS opens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tiemposText.variable} ${neueHaasDisplay.variable} ${dmSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
