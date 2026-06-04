"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const catalogueBaseUrl = "https://assets.zicassoart.com/catalogues";

const cataloguePages = [
  "cataloguedivider.jpg",
  "cataloguedivider2.jpg",
  "cataloguedivider3.jpg",
  "cataloguedivider4.jpg",
  "cataloguedivider5.jpg",
  "cataloguedivider8.jpg",
  "cataloguedivider9.jpg",
  "cataloguedivider10.jpg",
].map((filename, index) => ({
  title: `Spread ${(index + 1).toString().padStart(2, "0")}`,
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
  const activePage = cataloguePages[currentPage - 1];

  const previousPage = () => {
    setCurrentPage((page) => (page === 1 ? totalPages : page - 1));
  };

  const nextPage = () => {
    setCurrentPage((page) => (page === totalPages ? 1 : page + 1));
  };

  useEffect(() => {
    const preloadLinks = cataloguePages.map((page) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = page.src;
      document.head.appendChild(link);

      const image = new window.Image();
      image.src = page.src;

      return link;
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previousPage();
      }

      if (event.key === "ArrowRight") {
        nextPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      preloadLinks.forEach((link) => link.remove());
    };
  }, []);

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
                preload
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

      <section className="collection-atmosphere relative flex min-h-[calc(100vh-5.5rem)] flex-col items-center justify-center px-1 py-3 sm:px-3 lg:px-5">
        <button
          type="button"
          onClick={previousPage}
          className="fixed left-1 top-1/2 z-30 flex h-16 w-12 -translate-y-1/2 items-center justify-center text-[#5b3f2a] transition-opacity hover:opacity-60 sm:left-2 lg:left-3"
          aria-label="Previous page"
        >
          <ArrowIcon direction="left" />
        </button>

        <button
          type="button"
          onClick={nextPage}
          className="fixed right-1 top-1/2 z-30 flex h-16 w-12 -translate-y-1/2 items-center justify-center text-[#5b3f2a] transition-opacity hover:opacity-60 sm:right-2 lg:right-3"
          aria-label="Next page"
        >
          <ArrowIcon direction="right" />
        </button>

        <div className="relative aspect-[2.35/1] w-[min(99vw,1920px)]">
          <Image
            key={activePage.src}
            src={activePage.src}
            alt={`${activePage.title} catalogue page`}
            fill
            preload={currentPage === 1}
            sizes="99vw"
            className="catalogue-page-image object-contain drop-shadow-[0_30px_58px_rgba(74,52,35,0.22)]"
          />
        </div>

        <div className="mt-7 w-[min(70vw,760px)] text-center sm:mt-8">
          <div className="mx-auto mb-2 h-px overflow-hidden bg-[#9f8c7b]/34">
            <div
              className="h-full bg-[#8a5b35] transition-all duration-500 ease-out"
              style={{ width: `${(currentPage / totalPages) * 100}%` }}
            />
          </div>

          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#8a5b35]">
            Catalogue Page
          </p>
          <div className="mt-2 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-5">
            <h1 className="font-serif text-2xl leading-tight text-[#543824]">
              {activePage.title}
            </h1>
            <span className="hidden h-4 w-px bg-[#9f8c7b]/45 sm:block" aria-hidden="true" />
            <p className="font-serif text-xl text-[#65472f]">
              {currentPage.toString().padStart(2, "0")} /{" "}
              {totalPages.toString().padStart(2, "0")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
