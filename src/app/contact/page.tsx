import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zicasso Art to ask about original paintings, Judaica artwork, and custom fine-art commissions.",
  alternates: {
    canonical: "/contact",
  },
};

const navItems = [
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "Contact", href: "/contact" },
];

const contactMethods = [
  {
    title: "Phone",
    primary: "929.254.0639",
    href: "tel:9292540639",
    icon: "phone",
  },
  {
    title: "Website",
    primary: "zicassoart.com",
    href: "https://zicassoart.com",
    icon: "website",
  },
  {
    title: "Email",
    primary: "zicassofineart@gmail.com",
    href: "mailto:zicassofineart@gmail.com",
    icon: "mail",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="h-11 w-11 text-[var(--gold)]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      >
        <path d="M17.1 9.8 12.7 14c-1.5 1.5-1.5 6.6 1.3 12.3 2.9 5.8 7.9 10.8 13.7 13.7 5.7 2.8 10.8 2.8 12.3 1.3l4.2-4.4-8.1-7.5-4.4 4.1c-.7.7-3.5-.2-6.9-3.6-3.3-3.4-4.2-6.2-3.5-6.9l4.1-4.4-8.3-8.8Z" />
      </svg>
    );
  }

  if (type === "website") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="h-11 w-11 text-[var(--gold)]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      >
        <circle cx="24" cy="24" r="16" />
        <path d="M8.5 24h31" />
        <path d="M24 8c4.6 4 6.8 9.3 6.8 16S28.6 36 24 40" />
        <path d="M24 8c-4.6 4-6.8 9.3-6.8 16S19.4 36 24 40" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="h-11 w-11 text-[var(--gold)]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.35"
    >
      <rect x="8" y="13" width="32" height="22" />
      <path d="m9.5 14.5 14.5 12 14.5-12" />
      <path d="m9.5 33.5 10.8-10M38.5 33.5l-10.8-10" />
    </svg>
  );
}

type ContactPageProps = {
  searchParams?: Promise<{
    sent?: string;
    error?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const wasSent = params?.sent === "1";
  const hasError = params?.error === "1";

  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--ink)]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[var(--stone)] text-white backdrop-blur-xl">
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
                  item.href === "/contact"
                    ? "after:absolute after:-bottom-4 after:left-1/2 after:h-px after:w-16 after:-translate-x-1/2 after:bg-white/80"
                    : ""
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

      <section className="relative overflow-hidden bg-[linear-gradient(112deg,#fcf8f2_0%,#f3e7dc_52%,#eadbcc_100%)] px-6 py-16 sm:px-10 lg:px-[4.5rem] lg:py-24">
        <div
          aria-hidden="true"
          className="absolute left-[-12rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.64),transparent_66%)] blur-md"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-8rem] top-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(166,111,43,0.12),transparent_67%)] blur-lg"
        />

        <div className="relative mx-auto grid max-w-[1360px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="mx-auto max-w-[560px] text-center lg:mx-0 lg:text-left">
            <p className="mb-8 text-[0.78rem] uppercase tracking-[0.28em] text-[var(--gold)]">
              We&apos;d love to hear from you
            </p>
            <h1 className="font-serif text-5xl leading-[1.1] tracking-tight sm:text-6xl">
              Let&apos;s connect and create something{" "}
              <span className="italic text-[var(--gold)]">meaningful.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-[450px] text-base leading-8 text-[var(--ink)]/68 lg:mx-0">
              Whether you have a question about a painting, would like a custom piece, or need
              help choosing the perfect artwork, we&apos;re here for you.
            </p>
            <div className="mx-auto my-8 h-px w-16 bg-[var(--gold)] lg:mx-0" />
            <p className="mx-auto max-w-[390px] text-base leading-8 text-[var(--ink)]/62 lg:mx-0">
              Fill out the form or reach out through any of the ways below.
            </p>
          </div>

          <form className="contact-card mx-auto w-full max-w-[540px]" action="/api/contact" method="post">
            {wasSent ? (
              <p className="mb-6 border border-[var(--gold)]/35 bg-[#fff8ef]/72 px-5 py-4 text-center text-sm leading-6 text-[#7c5a38]">
                Thank you. Your message was sent successfully.
              </p>
            ) : null}
            {hasError ? (
              <p className="mb-6 border border-[#a85642]/35 bg-[#fff8ef]/72 px-5 py-4 text-center text-sm leading-6 text-[#8f4f3e]">
                Something went wrong. Please try again in a moment.
              </p>
            ) : null}
            <label className="block">
              <span className="contact-label">Your Name</span>
              <input name="name" type="text" placeholder="Full name" className="contact-field" required />
            </label>

            <label className="mt-6 block">
              <span className="contact-label">Email Address</span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="contact-field"
                required
              />
            </label>

            <label className="mt-6 block">
              <span className="contact-label">Subject</span>
              <select name="subject" defaultValue="" className="contact-field contact-select" required>
                <option value="" disabled>
                  How can we help?
                </option>
                <option>Question about a painting</option>
                <option>Custom order request</option>
                <option>Help choosing artwork</option>
                <option>General inquiry</option>
              </select>
            </label>

            <label className="mt-6 block">
              <span className="contact-label">Message</span>
              <textarea
                name="message"
                placeholder="Tell us more about your request..."
                className="contact-textarea"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex h-14 w-full items-center justify-center gap-8 border border-[var(--gold)] bg-[#fff8ef]/54 px-8 text-[0.78rem] uppercase tracking-[0.18em] text-[#8e5d27] transition hover:bg-[var(--gold)] hover:text-white"
            >
              <span>Send Message</span>
              <span aria-hidden="true">-&gt;</span>
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[var(--ivory)] px-6 py-12 sm:px-10 lg:px-[4.5rem]">
        <div className="mx-auto grid max-w-[1160px] gap-10 text-center md:grid-cols-3 md:gap-0">
          {contactMethods.map((method, index) => (
            <article
              key={method.title}
              className={`flex flex-col items-center px-6 py-4 ${
                index > 0 ? "md:border-l md:border-[#d8cbbc]" : ""
              }`}
            >
              <ContactIcon type={method.icon} />
              <h2 className="mt-6 text-[0.82rem] font-semibold uppercase tracking-[0.22em]">
                {method.title}
              </h2>
              {method.href ? (
                <Link
                  href={method.href}
                  className="mt-4 text-base text-[var(--ink)]/72 transition hover:text-[var(--gold)]"
                >
                  {method.primary}
                </Link>
              ) : (
                <p className="mt-4 text-base text-[var(--ink)]/72">{method.primary}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
