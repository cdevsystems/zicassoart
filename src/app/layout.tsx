import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zicassoart.com"),
  title: {
    default: "Zicasso Art | Fine Judaica Art by Zahavah Fasten",
    template: "%s | Zicasso Art",
  },
  description:
    "Original Judaica paintings, bespoke artwork, and fine-art collections by European-trained artist Zahavah Fasten.",
  applicationName: "Zicasso Art",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Zicasso Art",
    "Zahavah Fasten",
    "Judaica art",
    "Jewish art",
    "original paintings",
    "custom Judaica painting",
    "fine art",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zicassoart.com",
    siteName: "Zicasso Art",
    title: "Zicasso Art | Fine Judaica Art by Zahavah Fasten",
    description:
      "Original Judaica paintings, bespoke artwork, and fine-art collections created for meaningful, elevated interiors.",
    images: [
      {
        url: "/home/selected-work-1.jpg",
        width: 1200,
        height: 884,
        alt: "Selected Zicasso Judaica artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zicasso Art | Fine Judaica Art by Zahavah Fasten",
    description:
      "Original Judaica paintings, bespoke artwork, and fine-art collections created for meaningful, elevated interiors.",
    images: ["/home/selected-work-1.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  name: "Zicasso Art",
  url: "https://zicassoart.com",
  logo: "https://zicassoart.com/new-logo.png",
  image: "https://zicassoart.com/home/selected-work-1.jpg",
  description:
    "Fine Judaica art, original paintings, and custom artwork by Zahavah Fasten.",
  telephone: "+1-929-254-0639",
  email: "zicassofineart@gmail.com",
  founder: {
    "@type": "Person",
    name: "Zahavah Fasten",
  },
  sameAs: ["https://zicassoart.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
