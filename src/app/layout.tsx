import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLKWD | Architecture For The Subtropical Lifestyle",
  description:
    "High-performance residential sanctuaries across the Gold Coast, Brisbane, and Northern NSW. Bespoke homes, knock down rebuilds, and boutique multi-residential.",
  keywords: [
    "bespoke homes Gold Coast",
    "knock down rebuild Brisbane",
    "multi-residential SEQ",
    "subtropical architecture",
    "design and construct",
    "coastal builder",
    "BLKWD",
    "Blackwood Building Company",
  ],
  openGraph: {
    title: "BLKWD | Architecture For The Subtropical Lifestyle",
    description:
      "High-performance residential sanctuaries across the Gold Coast, Brisbane, and Northern NSW.",
    siteName: "BLKWD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
