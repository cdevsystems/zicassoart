import Image from "next/image";
import { ElegantSlideshow } from "@/components/elegant-slideshow";
import { heroPaintingSlides, paintings } from "@/lib/art-content";

const navItems = [
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "Contact", href: "/contact" },
];

const featuredPaintingGroups = [
  paintings.slice(0, 3),
  paintings.slice(3, 6),
  paintings.slice(6, 9),
  [...paintings.slice(9), paintings[0]],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[var(--stone)] text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[5.5rem] max-w-[1640px] items-center justify-between px-6 sm:px-10 lg:px-[4.5rem]">
          <a href="#" className="flex items-center gap-4" aria-label="Home">
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
          </a>

          <nav className="hidden items-center gap-12 text-[0.72rem] uppercase tracking-[0.22em] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white/70">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5 text-[0.72rem] uppercase tracking-[0.2em]">
            <a className="icon-button" href="/search" aria-label="Search" />
            <a className="icon-button icon-button-user" href="/account" aria-label="Account" />
            <a className="icon-button icon-button-bag" href="/bag" aria-label="Bag" />
          </div>
        </div>
      </header>

      <section className="hero-atmosphere relative overflow-hidden">
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />
        <div className="hero-shadow-leaf" aria-hidden="true" />
        <div className="mx-auto grid min-h-[660px] max-w-[1640px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-[4.5rem] lg:py-0">
          <div className="relative max-w-[430px]">
            <p className="mb-8 text-[0.76rem] uppercase tracking-[0.24em] text-[var(--gold)]">
              Timeless. Sacred. Elevated.
            </p>
            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
              A peice of art for the finishing touch.
            </h1>
            <p className="mt-7 max-w-[390px] text-base leading-7 text-[var(--ink)]/78">
              Discover original paintings that bring beauty, meaning, and timeless inspiration
              into your space.
            </p>
            <a
              href="/catalogue"
              className="mt-10 inline-flex h-[3.25rem] min-w-[260px] items-center justify-center gap-8 border border-[var(--gold)] px-8 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink)] transition-colors hover:bg-[var(--gold)] hover:text-white"
            >
              <span>Explore Collection</span>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div className="relative grid min-h-[480px] place-items-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.5),transparent_48%)]" />
            <ElegantSlideshow
              className="relative h-[min(50vw,500px)] min-h-[360px] w-full max-w-[760px] drop-shadow-[0_34px_48px_rgba(74,52,35,0.18)]"
              slides={heroPaintingSlides}
              interval={6200}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--ivory)] px-6 py-[4.5rem] sm:px-10 lg:px-[4.5rem]">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 text-center">
            <p className="mb-4 text-[0.76rem] uppercase tracking-[0.24em] text-[var(--gold)]">
              Featured Artworks
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Curated pieces for inspired living.
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {featuredPaintingGroups.map((group, index) => {
              const slides = group.flatMap((item) => item.images);

              return (
                <article key={group.map((item) => item.slug).join("-")} className="group">
                <ElegantSlideshow
                  className="h-[230px] transition-transform duration-500 group-hover:-translate-y-1"
                  slides={slides}
                  interval={5400 + index * 450}
                />
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/catalogue"
              className="inline-flex h-[3.25rem] min-w-[260px] items-center justify-center gap-8 border border-[var(--gold)] px-8 text-[0.72rem] uppercase tracking-[0.18em]"
            >
              <span>View All Artworks</span>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
