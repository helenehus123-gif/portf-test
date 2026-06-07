import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt · Helene Huseby",
};

export default function Contact() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Etikett */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
          <p className="text-[0.7rem] text-muted uppercase tracking-[0.15em]">Kontakt</p>
        </div>

        <h1
          className="font-display leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
        >
          Si hei<span className="text-accent">.</span>
        </h1>

        {/* E-post */}
        <section aria-labelledby="email-heading" className="mb-16">
          <h2
            id="email-heading"
            className="text-[0.65rem] text-muted uppercase tracking-[0.12em] mb-4"
          >
            E-post
          </h2>
          <a
            href="mailto:helenehuseby@hotmail.com"
            className="font-display text-fg cursor-pointer hover:text-accent transition-colors duration-200 focus-visible:rounded break-all"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.8rem)" }}
          >
            helenehuseby@hotmail.com
          </a>
        </section>

        {/* Telefon */}
        <section aria-labelledby="phone-heading" className="mb-16">
          <h2
            id="phone-heading"
            className="text-[0.65rem] text-muted uppercase tracking-[0.12em] mb-4"
          >
            Telefon
          </h2>
          <a
            href="tel:+4741214354"
            className="font-display text-fg cursor-pointer hover:text-accent transition-colors duration-200 focus-visible:rounded"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.8rem)" }}
          >
            412 14 354
          </a>
        </section>


      </div>
    </div>
  );
}
