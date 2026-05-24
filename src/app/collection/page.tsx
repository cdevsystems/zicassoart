"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const catalogueBaseUrl = "https://assets.zicassoart.com/catalogues";

const cataloguePages = [
  "Front pagecatalogue.jpg",
  "A Lovely Morning.jpg",
  "Fruits Of The Bikurim.jpg",
  "Krias Yam Suf.jpg",
  "Prayers at the koisel (2).jpg",
  "Snowy Koisel .jpg",
  "The Moment Of Candlelighting.jpg",
  "The Smell Of Sunflowers.jpg",
  "The light of Our life (2).jpg",
  "Vintage airballoon.jpg",
  "torah Hu Chayeinu.jpg",
  "portrait.jpg",
  "Price Page.jpg",
  "Back page.jpg",
].map((filename) => ({
  title: filename.replace(/\.(jpg|png)$/i, ""),
  src: `${catalogueBaseUrl}/${encodeURIComponent(filename)}`,
}));

const totalPages = cataloguePages.length;

const navItems = [
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "Contact", href: "/contact" },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-8 w-8 border-[1.5px] border-current ${
        direction === "left"
          ? "rotate-45 border-r-0 border-t-0"
          : "-rotate-45 border-l-0 border-t-0"
      }`}
    />
  );
}

export default function CollectionPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.6);
  const activePage = cataloguePages[currentPage - 1];

  const previousPage = () => {
    setCurrentPage((page) => (page === 1 ? totalPages : page - 1));
  };

  const nextPage = () => {
    setCurrentPage((page) => (page === totalPages ? 1 : page + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previousPage();
      }

      if (event.key === "ArrowRight") {
        nextPage();
      }

      if (event.key === "Escape" && isZoomed) {
        setIsZoomed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

  const openZoom = () => {
    setZoomLevel(1.6);
    setIsZoomed(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#eaded1] text-[#4a3423]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[var(--stone)] text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[5.5rem] max-w-[1640px] items-center justify-between px-6 sm:px-10 lg:px-[4.5rem]">
          <Link href="/" className="flex items-center gap-4" aria-label="Home">
            <span className="relative block h-14 w-[220px] overflow-hidden">
              <Image
                src="/new-logo.png"
                alt="Zahavah Fine Art"
                width={520}
                height={347}
                priority
                className="absolute left-1/2 top-1/2 w-[260px] max-w-none -translate-x-1/2 -translate-y-1/2"
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-16 text-[0.82rem] uppercase tracking-[0.2em] lg:flex xl:gap-20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 text-[0.72rem] uppercase tracking-[0.2em]">
            <Link className="icon-button" href="/search" aria-label="Search" />
            <Link className="icon-button icon-button-user" href="/account" aria-label="Account" />
            <Link className="icon-button icon-button-bag" href="/bag" aria-label="Bag" />
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-5.5rem)] flex-col items-center justify-center px-5 py-8 sm:px-9 lg:px-[6.5rem]">
        <button
          type="button"
          onClick={previousPage}
          className="absolute left-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center text-[#5b3f2a] transition-opacity hover:opacity-65 sm:left-8 lg:left-[3.5rem]"
          aria-label="Previous page"
        >
          <ArrowIcon direction="left" />
        </button>

        <button
          type="button"
          onClick={nextPage}
          className="absolute right-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center text-[#5b3f2a] transition-opacity hover:opacity-65 sm:right-8 lg:right-[3.5rem]"
          aria-label="Next page"
        >
          <ArrowIcon direction="right" />
        </button>

        <div className="group relative h-[min(84vh,880px)] w-[min(92vw,1580px)]">
          <Image
            src={activePage.src}
            alt={`${activePage.title} catalogue page`}
            fill
            priority={currentPage === 1}
            sizes="92vw"
            className="object-contain drop-shadow-[0_30px_58px_rgba(74,52,35,0.22)]"
          />
          <button
            type="button"
            onClick={openZoom}
            className="absolute right-[7%] top-[7%] z-10 flex h-12 items-center gap-3 rounded-full border border-[#8d735f]/30 bg-[#fffaf5]/88 px-5 text-[0.68rem] uppercase tracking-[0.18em] text-[#5b3f2a] opacity-0 shadow-[0_12px_28px_rgba(74,52,35,0.16)] backdrop-blur-sm transition duration-300 hover:bg-white group-hover:opacity-100"
            aria-label={`Zoom ${activePage.title}`}
          >
            <span className="relative block h-4 w-4" aria-hidden="true">
              <span className="absolute inset-0 rounded-full border border-current" />
              <span className="absolute -bottom-1 -right-1 h-[7px] w-px rotate-[-45deg] bg-current" />
            </span>
            Zoom
          </button>
        </div>

        <p className="mt-7 text-center font-serif text-2xl text-[#65472f]">
          {currentPage.toString().padStart(2, "0")} / {totalPages.toString().padStart(2, "0")}
        </p>
      </section>

      {isZoomed ? (
        <div
          className="fixed inset-0 z-50 bg-[#2f241d]/82 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePage.title} zoomed catalogue page`}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/12 text-3xl leading-none text-white transition hover:bg-white/20"
            aria-label="Close zoom view"
          >
            ×
          </button>

          <div className="absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/22 bg-white/12 px-3 py-2 text-white shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <button
              type="button"
              onClick={() => setZoomLevel((level) => Math.max(1, Number((level - 0.25).toFixed(2))))}
              className="flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none transition hover:bg-white/18"
              aria-label="Zoom out"
            >
              −
            </button>
            <span className="min-w-16 text-center text-[0.68rem] uppercase tracking-[0.16em]">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setZoomLevel((level) => Math.min(3, Number((level + 0.25).toFixed(2))))}
              className="flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none transition hover:bg-white/18"
              aria-label="Zoom in"
            >
              +
            </button>
          </div>

          <div className="h-full overflow-auto px-6 pb-10 pt-24">
            <div
              className="relative mx-auto"
              style={{
                height: `${92 * zoomLevel}vh`,
                width: `${96 * zoomLevel}vw`,
              }}
            >
              <Image
                src={activePage.src}
                alt={`${activePage.title} catalogue page enlarged`}
                fill
                sizes={`${Math.round(96 * zoomLevel)}vw`}
                className="object-contain drop-shadow-[0_32px_70px_rgba(0,0,0,0.34)]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
