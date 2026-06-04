import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "Contact", href: "/contact" },
];

const values = [
  {
    title: "Meaningful Inspiration",
    body: "Rooted in timeless values and spiritual depth, each artwork is created to bring warmth, reflection, and quiet beauty into the home.",
    icon: "heart",
  },
  {
    title: "Timeless Craftsmanship",
    body: "Every piece is approached with care, layered detail, and a refined eye for materials, light, and feeling.",
    icon: "diamond",
  },
  {
    title: "Elevated Living",
    body: "Designed to harmonize with beautiful spaces and become part of the atmosphere of everyday life.",
    icon: "frame",
  },
];

function ValueIcon({ type }: { type: string }) {
  if (type === "diamond") {
    return (
      <span
        aria-hidden="true"
        className="relative block h-8 w-8 rotate-45 border border-[var(--gold)]/70"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--gold)]/35" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--gold)]/35" />
      </span>
    );
  }

  if (type === "frame") {
    return (
      <span
        aria-hidden="true"
        className="relative block h-8 w-9 border border-[var(--gold)]/70"
      >
        <span className="absolute left-1 top-1 h-2 w-2 border-l border-t border-[var(--gold)]/55" />
        <span className="absolute right-1 top-1 h-2 w-2 border-r border-t border-[var(--gold)]/55" />
        <span className="absolute bottom-1 left-1 h-2 w-2 border-b border-l border-[var(--gold)]/55" />
        <span className="absolute bottom-1 right-1 h-2 w-2 border-b border-r border-[var(--gold)]/55" />
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="relative block h-8 w-9">
      <span className="absolute left-1 top-3 h-4 w-7 rounded-b-full border-b border-l border-r border-[var(--gold)]/70" />
      <span className="absolute left-4 top-0 h-4 w-4 rotate-45 rounded-tl-full rounded-br-full border border-[var(--gold)]/70" />
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
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
                className={`relative transition-colors hover:text-white/70 ${
                  item.href === "/about" ? "after:absolute after:-bottom-4 after:left-1/2 after:h-px after:w-9 after:-translate-x-1/2 after:bg-white/80" : ""
                }`}
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

      <section className="grid min-h-[560px] bg-[#efe4d7] lg:grid-cols-[60%_40%]">
        <div className="flex items-center bg-[linear-gradient(115deg,#fffaf5_0%,#f4eadf_100%)] px-6 py-14 sm:px-10 lg:px-[6vw]">
          <div className="max-w-[920px]">
            <p className="mb-8 text-[0.76rem] uppercase tracking-[0.24em] text-[var(--gold)]">
              About Zicasso
            </p>
            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
              Behind every piece is a story.
            </h1>
            <div className="my-9 h-px w-18 bg-[var(--gold)]" />
            <div className="max-w-[860px] space-y-3 text-base leading-8 text-[var(--ink)]/66">
              <p>
                Behind the Zicasso Art brand is the artist Zahavah Fasten, a European-trained
                artist whose passion for Judaica art lies at the heart of every collection and
                creation.
              </p>
              <p>
                Zicasso Art was founded on the belief that the artwork within a home should
                reflect the values, personality, and story of its owner.
              </p>
              <p>
                At Zicasso, we carefully select scenes, textures, and color palettes that combine
                timeless beauty with lasting impact.
              </p>
              <p>
                High-end interior designers often build an entire room around a statement artwork
                because art is the centerpiece that brings everything together.
              </p>
              <p>
                Own a Zicasso, because if you do not owe it to yourself, you owe it to your home.
              </p>
              <p>
                Tell us your favorite themes and the colors you would love to wake up to every
                morning. Let&apos;s create something timeless together.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden bg-[#e8dacb]">
          <Image
            src="/about/about-page-asset-1.png"
            alt="Framed artwork displayed in a refined interior"
            fill
            preload
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="grid bg-[var(--ivory)] lg:grid-cols-[38%_62%]">
        <div className="relative min-h-[310px] overflow-hidden lg:min-h-[360px]">
          <Image
            src="/about/paintbrush-assets.png"
            alt="Paintbrushes arranged on an artist table"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="grid items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-3 lg:gap-0 lg:px-[6vw] lg:py-16">
          {values.map((item, index) => (
            <article
              key={item.title}
              className={`relative px-0 lg:px-12 ${
                index > 0 ? "lg:border-l lg:border-[#cdbdab]" : ""
              }`}
            >
              <ValueIcon type={item.icon} />
              <h2 className="mt-7 max-w-[210px] font-serif text-2xl leading-tight">
                {item.title}
              </h2>
              <div className="my-6 h-px w-10 bg-[var(--gold)]" />
              <p className="max-w-[245px] text-sm leading-7 text-[var(--ink)]/62">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#eaded1] bg-[linear-gradient(105deg,#fcf9f4_0%,#f1e6db_50%,#fcf9f4_100%)] px-6 py-12 text-center sm:px-10">
        <p className="font-serif text-2xl leading-relaxed text-[var(--ink)]/84">
          Art with purpose. Beauty with meaning. Made to be cherished for generations.
        </p>
        <div className="mx-auto mt-7 h-px w-16 bg-[var(--gold)]" />
      </section>
    </main>
  );
}
