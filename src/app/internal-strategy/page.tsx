import type { Metadata } from "next";
import StrategyGuide from "@/components/StrategyGuide";

export const metadata: Metadata = {
  title: "BLKWD | Internal Strategy — 2026 Market Pivot",
  description:
    "Bespoke, resilient, and wellness-led residential builds from Miami to Byron Bay. We design for longevity and human performance.",
  robots: "noindex, nofollow",
};

export default function InternalStrategyPage() {
  return <StrategyGuide />;
}
