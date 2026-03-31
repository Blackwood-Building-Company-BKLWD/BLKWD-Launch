import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLKWD | Luxury Design & Build",
  description:
    "Bespoke Homes, Multi-Residential & Knock Down Rebuild. Serving the Gold Coast, Brisbane, and Northern NSW.",
  keywords: [
    "luxury homes",
    "custom homes",
    "knockdown rebuild",
    "design and construct",
    "Sydney builder",
    "architectural homes",
    "BLKWD",
    "Blackwood Building Company",
  ],
  openGraph: {
    title: "BLKWD | Luxury Design & Build",
    description:
      "Bespoke Homes, Multi-Residential & Knock Down Rebuild. Serving the Gold Coast, Brisbane, and Northern NSW.",
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
