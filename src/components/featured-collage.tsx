import Image from "next/image";
import { transparentFeaturedPaintings } from "@/lib/art-content";

const collageItems = [
  { index: 5, className: "left-[2%] top-[16%] h-[210px] w-[230px] rotate-[-2deg]" },
  { index: 2, className: "left-[16%] top-[19%] h-[116px] w-[170px] rotate-[1deg]" },
  { index: 7, className: "left-[28%] top-[15%] h-[245px] w-[360px] rotate-[-1deg]" },
  { index: 12, className: "left-[53%] top-[16%] h-[270px] w-[190px] rotate-[1.5deg]" },
  { index: 0, className: "left-[65%] top-[20%] h-[125px] w-[170px] rotate-[-1deg]" },
  { index: 8, className: "right-[2%] top-[14%] h-[225px] w-[230px] rotate-[2deg]" },
  { index: 3, className: "left-[0%] top-[48%] h-[195px] w-[310px] rotate-[1deg]" },
  { index: 10, className: "left-[25%] top-[53%] h-[150px] w-[220px] rotate-[-1.5deg]" },
  { index: 11, className: "left-[40%] top-[47%] h-[180px] w-[290px] rotate-[0.5deg]" },
  { index: 14, className: "left-[56%] top-[49%] h-[120px] w-[110px] rotate-[-2deg]" },
  { index: 6, className: "left-[65%] top-[43%] h-[210px] w-[265px] rotate-[1deg]" },
  { index: 9, className: "right-[0%] top-[44%] h-[140px] w-[190px] rotate-[-1deg]" },
  { index: 12, className: "left-[12%] bottom-[4%] h-[170px] w-[135px] rotate-[-3deg]" },
  { index: 4, className: "left-[25%] bottom-[2%] h-[158px] w-[230px] rotate-[1.5deg]" },
  { index: 1, className: "left-[45%] bottom-[3%] h-[135px] w-[250px] rotate-[-1deg]" },
  { index: 13, className: "left-[61%] bottom-[1%] h-[125px] w-[145px] rotate-[2deg]" },
  { index: 7, className: "right-[8%] bottom-[0%] h-[150px] w-[260px] rotate-[-1.2deg]" },
];

const ghostItems = [
  { index: 6, className: "-left-[9%] top-[0%] h-[360px] w-[390px] rotate-[-7deg]" },
  { index: 8, className: "-right-[5%] top-[2%] h-[330px] w-[320px] rotate-[5deg]" },
  { index: 12, className: "right-[0%] bottom-[-6%] h-[330px] w-[230px] rotate-[4deg]" },
  { index: 9, className: "-left-[6%] bottom-[2%] h-[260px] w-[330px] rotate-[4deg]" },
];

const mobileItems = [5, 2, 7, 12, 6, 3, 11, 10, 8, 14];

export function FeaturedCollage() {
  return (
    <div className="relative mx-auto mt-2 max-w-[1540px]">
      <div className="relative hidden min-h-[760px] lg:block">
        {ghostItems.map((item) => {
          const painting = transparentFeaturedPaintings[item.index];

          return (
            <div
              key={`ghost-${painting.id}-${item.className}`}
              className={`pointer-events-none absolute opacity-[0.13] blur-[0.2px] ${item.className}`}
              aria-hidden="true"
            >
              <Image
                src={painting.src ?? ""}
                alt=""
                fill
                unoptimized
                preload
                sizes="26vw"
                className="object-contain"
              />
            </div>
          );
        })}

        {collageItems.map((item, order) => {
          const painting = transparentFeaturedPaintings[item.index];

          return (
            <a
              key={`${painting.id}-${order}`}
              href="/collection"
              className={`group absolute block transition duration-500 ease-out hover:z-10 hover:-translate-y-2 hover:scale-[1.025] ${item.className}`}
              aria-label={`View ${painting.alt}`}
            >
              <Image
                src={painting.src ?? ""}
                alt={painting.alt}
                fill
                unoptimized
                preload
                sizes="(min-width: 1280px) 24vw, 30vw"
                className="object-contain drop-shadow-[0_18px_20px_rgba(74,52,35,0.18)] transition duration-500 group-hover:drop-shadow-[0_24px_30px_rgba(74,52,35,0.22)]"
              />
            </a>
          );
        })}
      </div>

      <div className="grid grid-cols-2 items-end gap-x-5 gap-y-7 sm:grid-cols-3 lg:hidden">
        {mobileItems.map((index, order) => {
          const painting = transparentFeaturedPaintings[index];
          const sizeClass = order % 5 === 2 ? "h-[230px] col-span-2 sm:col-span-1" : "h-[180px]";

          return (
            <a
              key={`mobile-${painting.id}-${order}`}
              href="/collection"
              className={`relative block ${sizeClass}`}
              aria-label={`View ${painting.alt}`}
            >
              <Image
                src={painting.src ?? ""}
                alt={painting.alt}
                fill
                unoptimized
                preload
                sizes="(min-width: 640px) 32vw, 48vw"
                className="object-contain drop-shadow-[0_14px_18px_rgba(74,52,35,0.16)]"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
