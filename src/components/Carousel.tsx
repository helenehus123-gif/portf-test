"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudyImage } from "@/lib/types";

export default function Carousel({ images }: { images: CaseStudyImage[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const img = images[current];

  return (
    <div>
      <div className="relative w-full aspect-[16/9] rounded-2xl bg-surface border border-border overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain p-6"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={prev}
          aria-label="Forrige bilde"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-fg text-bg hover:bg-accent transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Bilde ${i + 1} av ${images.length}`}
              aria-current={i === current ? "true" : undefined}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
                i === current ? "bg-fg" : "bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Neste bilde"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-fg text-bg hover:bg-accent transition-colors duration-200 cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {img.caption && (
        <p className="text-xs text-muted text-center mt-3">{img.caption}</p>
      )}
    </div>
  );
}
