"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { PaintingImage } from "@/lib/art-content";

type ElegantSlideshowProps = {
  slides: Array<PaintingImage & { title?: string }>;
  className?: string;
  interval?: number;
};

export function ElegantSlideshow({
  slides,
  className = "",
  interval = 5200,
}: ElegantSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  useEffect(() => {
    if (safeSlides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, safeSlides.length]);

  if (safeSlides.length === 0) {
    return <div className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {safeSlides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition duration-[1400ms] ease-out ${
            index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-[1.025]"
          }`}
          style={slide.src ? undefined : { background: slide.gradient }}
        >
          {slide.src ? (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              unoptimized
              sizes="(min-width: 1280px) 42vw, (min-width: 768px) 48vw, 92vw"
              className="object-contain"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
