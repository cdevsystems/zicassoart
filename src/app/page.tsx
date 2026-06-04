import Image from "next/image";
import { ElegantSlideshow } from "@/components/elegant-slideshow";
import { heroPaintingSlides } from "@/lib/art-content";

const navItems = [
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "Contact", href: "/contact" },
];

const selectedWorks = [
  {
    id: "selected-work-1",
    src: "/home/selected-work-1.jpg",
    alt: "Selected Zicasso artwork in warm gold and blue tones",
  },
  {
    id: "selected-work-2",
    src: "/home/selected-work-2.jpg",
    alt: "Selected Zicasso artwork with expressive Judaica imagery",
  },
  {
    id: "selected-work-3",
    src: "/home/selected-work-3.jpg",
    alt: "Selected Zicasso artwork with a refined interior feeling",
  },
  {
    id: "selected-work-4",
    src: "/home/selected-work-4.jpg",
    alt: "Selected Zicasso artwork with painterly golden detail",
  },
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
                preload
                className="absolute left-1/2 top-1/2 w-[260px] max-w-none -translate-x-1/2 -translate-y-1/2"
              />
            </span>
          </a>

          <nav className="hidden items-center gap-16 text-[0.82rem] uppercase tracking-[0.2em] lg:flex xl:gap-20">
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
        <div className="absolute inset-y-0 right-0 hidden w-[62vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)] lg:block">
          <ElegantSlideshow
            className="relative h-full min-h-[660px] w-full"
            imageClassName="object-cover object-[72%_center]"
            slides={heroPaintingSlides}
            interval={6200}
          />
        </div>
        <div className="mx-auto grid min-h-[660px] max-w-[1640px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-[4.5rem] lg:py-0">
          <div className="relative z-10 max-w-[430px]">
            <p className="mb-8 text-[0.76rem] uppercase tracking-[0.24em] text-[var(--gold)]">
              Timeless. Sacred. Elevated.
            </p>
            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
              A piece of art for the finishing touch.
            </h1>
            <p className="mt-7 max-w-[390px] text-base leading-7 text-[var(--ink)]/78">
              Discover original paintings that bring beauty, meaning, and timeless inspiration
              into your space.
            </p>
            <a
              href="/collection"
              className="mt-10 inline-flex h-[3.25rem] min-w-[260px] items-center justify-center gap-8 border border-[var(--gold)] px-8 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink)] transition-colors hover:bg-[var(--gold)] hover:text-white"
            >
              <span>Explore Collection</span>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div className="relative grid min-h-[480px] place-items-center overflow-hidden lg:hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.5),transparent_48%)]" />
            <ElegantSlideshow
              className="relative h-[min(50vw,500px)] min-h-[360px] w-full max-w-[760px] drop-shadow-[0_34px_48px_rgba(74,52,35,0.18)]"
              imageClassName="object-cover object-center"
              slides={heroPaintingSlides}
              interval={6200}
            />
          </div>
        </div>
      </section>

      <section
        id="selected-works"
        className="selected-works-gallery relative w-full overflow-hidden px-6 py-[90px] sm:px-10"
      >
        <div className="relative mx-auto max-w-[1320px]">
          <p className="mb-10 text-center text-[11px] uppercase tracking-[0.35em] text-[#b49467]">
            Selected Works
          </p>

          <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-16 xl:grid-cols-4 xl:gap-x-[72px]">
            {selectedWorks.map((work) => (
              <a
                key={work.src}
                href={`#${work.id}`}
                className="selected-work-image block"
                aria-label="Open selected artwork in enlarged view"
              >
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={6732}
                  height={4961}
                  sizes="(min-width: 1280px) 290px, (min-width: 768px) 45vw, 92vw"
                  className="h-auto w-full object-contain"
                />
              </a>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="/collection"
              className="selected-works-cta inline-flex items-center justify-center gap-5 pb-2 text-[14px] font-medium uppercase tracking-[0.18em] text-[#6c5844]"
            >
              <span>Discover The Full Collection</span>
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </section>

      {selectedWorks.map((work) => (
        <div
          key={`${work.id}-lightbox`}
          id={work.id}
          className="selected-work-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged selected artwork"
        >
          <a
            href="#selected-works"
            className="selected-work-lightbox-backdrop"
            aria-label="Close enlarged artwork"
          />
          <a href="#selected-works" className="selected-work-lightbox-close">
            Close
          </a>
          <div className="selected-work-lightbox-frame">
            <Image
              src={work.src}
              alt={work.alt}
              width={6732}
              height={4961}
              sizes="96vw"
              className="h-auto max-h-[86vh] w-auto max-w-[92vw] object-contain"
            />
          </div>
        </div>
      ))}
    </main>
  );
}
