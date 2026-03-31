import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLKWD | Instagram Preview",
  description: "Visual Emotion Grid preview for @BLKWD.au",
};

export default function IGLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
