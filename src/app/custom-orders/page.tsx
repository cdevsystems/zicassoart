import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "Contact", href: "/contact" },
];

function UploadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 64"
      className="h-16 w-20 text-[var(--gold)]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.15"
    >
      <path d="M24.5 44.5H18.8c-7.2 0-13-5.4-13-12.1 0-6.4 5.3-11.7 12-12.1 2.7-8.2 10.8-13.9 20.2-13.9 10.5 0 19.2 7.1 20.7 16.3h1.7c7.6 0 13.8 5.6 13.8 12.4s-6.2 12.4-13.8 12.4H55.2" />
      <path d="M40 50.8V23.3" />
      <path d="m29.8 33.1 10.2-10 10.2 10" />
      <path d="M27.8 55.5h24.4" />
      <path d="M14.5 51.3c3.2 3 7.5 4.8 12.4 4.8" opacity="0.55" />
      <path d="M53.1 56.1c4.7 0 9-1.7 12.1-4.6" opacity="0.55" />
    </svg>
  );
}

type CustomOrdersPageProps = {
  searchParams?: Promise<{
    sent?: string;
    error?: string;
  }>;
};

export default async function CustomOrdersPage({ searchParams }: CustomOrdersPageProps) {
  const params = await searchParams;
  const wasSent = params?.sent === "1";
  const hasError = params?.error === "1";
  const hasFileError = params?.error === "files";

  return (
    <main className="min-h-screen bg-[#f8f0e7] text-[var(--ink)]">
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
                  item.href === "/custom-orders"
                    ? "after:absolute after:-bottom-4 after:left-1/2 after:h-px after:w-24 after:-translate-x-1/2 after:bg-white/80"
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

      <section className="relative overflow-hidden border-b border-[#ded0c2] bg-[linear-gradient(106deg,#fffaf4_0%,#f5eadf_45%,#eadbca_100%)]">
        <div
          aria-hidden="true"
          className="absolute -left-16 bottom-0 h-[340px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(123,105,78,0.14),transparent_64%)] blur-xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 hidden h-full w-[31vw] bg-[radial-gradient(circle_at_70%_25%,rgba(183,127,67,0.34),transparent_23%),linear-gradient(90deg,transparent,rgba(168,126,88,0.18))] xl:block"
        />
        <div className="absolute bottom-0 right-0 hidden h-[76%] w-[31vw] opacity-75 xl:block">
          <Image
            src="/about/paintbrush-assets.png"
            alt=""
            fill
            sizes="31vw"
            className="object-cover object-left-bottom [mask-image:linear-gradient(to_left,black_55%,transparent_100%)]"
          />
        </div>

        <div className="relative mx-auto grid max-w-[1660px] gap-16 px-6 py-18 sm:px-10 lg:px-14 lg:py-28 xl:grid-cols-[0.66fr_1.58fr] xl:gap-18 2xl:px-[4.5rem]">
          <div className="max-w-[560px] xl:pt-2">
            <p className="mb-9 text-[0.82rem] uppercase tracking-[0.3em] text-[var(--gold)]">
              Custom Orders
            </p>
            <h1 className="font-serif text-6xl leading-[1.08] tracking-tight sm:text-7xl">
              Your vision. Hand-painted with{" "}
              <span className="italic text-[var(--gold)]">meaning.</span>
            </h1>
            <div className="my-10 h-px w-20 bg-[var(--gold)]" />
            <p className="max-w-[450px] text-lg leading-9 text-[var(--ink)]/72">
              Share your idea and we&apos;ll create a one-of-a-kind artwork that reflects
              your story, space, and values.
            </p>
          </div>

          <form
            className="mx-auto grid w-full max-w-[1160px] items-start gap-10 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] xl:gap-14"
            action="/api/custom-order"
            method="post"
            encType="multipart/form-data"
          >
            {(wasSent || hasError || hasFileError) && (
              <div className="md:col-span-3">
                {wasSent ? (
                  <p className="border border-[var(--gold)]/35 bg-[#fff8ef]/72 px-5 py-4 text-center text-sm leading-6 text-[#7c5a38]">
                    Thank you. Your custom order request was sent successfully.
                  </p>
                ) : null}
                {hasFileError ? (
                  <p className="border border-[#a85642]/35 bg-[#fff8ef]/72 px-5 py-4 text-center text-sm leading-6 text-[#8f4f3e]">
                    Please keep each attachment under 8MB and the total upload under 20MB.
                  </p>
                ) : null}
                {hasError ? (
                  <p className="border border-[#a85642]/35 bg-[#fff8ef]/72 px-5 py-4 text-center text-sm leading-6 text-[#8f4f3e]">
                    Something went wrong. Please try again in a moment.
                  </p>
                ) : null}
              </div>
            )}
            <div>
              <p className="mb-9 text-[0.82rem] uppercase tracking-[0.26em] text-[var(--gold)]">
                1. Describe Your Vision
              </p>
              <div className="space-y-6">
                <label className="relative block">
                  <span className="sr-only">Your name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="custom-order-field"
                    required
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">Email address</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="custom-order-field"
                    required
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">Artwork type</span>
                  <select
                    name="artwork-type"
                    defaultValue=""
                    className="custom-order-field custom-order-select"
                    required
                  >
                    <option value="" disabled>
                      What type of artwork are you envisioning?
                    </option>
                    <option>Original painting</option>
                    <option>Judaica artwork</option>
                    <option>Portrait</option>
                    <option>Interior commission</option>
                  </select>
                </label>

                <label className="relative block">
                  <span className="sr-only">Project description</span>
                  <textarea
                    name="description"
                    placeholder="Describe your idea, the feeling you want to capture, colors, size, style, or any important details..."
                    className="custom-order-textarea"
                    required
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">Artwork placement</span>
                  <select
                    name="placement"
                    defaultValue=""
                    className="custom-order-field custom-order-select"
                    required
                  >
                    <option value="" disabled>
                      Where will the artwork be placed?
                    </option>
                    <option>Living room</option>
                    <option>Dining room</option>
                    <option>Study or office</option>
                    <option>Shul or communal space</option>
                    <option>Gift or private collection</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="hidden min-h-full bg-[#d8cbbc]/72 md:block" aria-hidden="true" />

            <div className="flex h-full flex-col">
              <p className="mb-9 text-[0.82rem] uppercase tracking-[0.26em] text-[var(--gold)]">
                2. Upload References (Optional)
              </p>
              <p className="min-h-[4rem] max-w-[470px] text-base leading-8 text-[var(--ink)]/70">
                Upload images that inspire your vision. This could be a photo, a color palette,
                a design, or anything that helps us understand your idea.
              </p>

              <label className="custom-order-upload mt-6 flex min-h-[380px] flex-1 cursor-pointer flex-col items-center justify-center px-10 text-center md:min-h-[430px] xl:min-h-[470px]">
                <input
                  name="references"
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  className="sr-only"
                />
                <UploadIcon />
                <span className="mt-6 text-base text-[var(--ink)]/72">
                  Drag and drop images here
                </span>
                <span className="mt-4 text-base text-[var(--ink)]/68">or</span>
                <span className="mt-6 inline-flex h-12 min-w-[205px] items-center justify-center border border-[var(--gold)] bg-[#fff8ef]/50 px-7 text-[0.78rem] uppercase tracking-[0.18em] text-[var(--gold)] transition group-hover:bg-white/20">
                  Choose Files
                </span>
                <span className="mt-5 text-sm text-[var(--ink)]/50">
                  JPG, PNG or PDF up to 8MB each
                </span>
              </label>
            </div>

            <div className="md:col-span-3">
              <div className="mx-auto mt-4 max-w-[500px] text-center">
                <button
                  type="submit"
                  className="h-16 w-full bg-[var(--gold)] px-10 text-[0.9rem] uppercase tracking-[0.2em] text-white shadow-[0_20px_40px_rgba(112,72,35,0.22)] transition hover:bg-[#8e5d27]"
                >
                  Submit Your Request
                </button>
                <p className="mt-6 text-base leading-7 text-[var(--ink)]/58">
                  We&apos;ll review your request and get back to you within 1-2 business days.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[linear-gradient(105deg,#fcf9f4_0%,#f1e6db_50%,#fcf9f4_100%)] px-6 py-8 text-center sm:px-10">
        <p className="font-serif text-xl leading-relaxed text-[var(--ink)]/84">
          &quot;Art with purpose. Beauty with meaning. Made to be cherished for generations.&quot;
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-[var(--gold)]" />
      </section>
    </main>
  );
}
