import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Browse the Zicasso Art catalogue of original Judaica paintings, curated spreads, and meaningful fine-art pieces.",
  alternates: {
    canonical: "/collection",
  },
};

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
