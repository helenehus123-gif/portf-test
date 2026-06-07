import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Om meg · Helene Huseby",
  description: "Designer med bredde i UX, tjenestedesign og systemisk design.",
};

export default function About() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Etikett */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
          <p className="text-[0.7rem] text-muted uppercase tracking-[0.15em]">Om meg</p>
        </div>

        <h1
          className="font-display leading-[0.9] tracking-tight mb-16"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
        >
          Hei, jeg
          <br />
          er Helene<span className="text-accent">.</span>
        </h1>

        {/* ── Hoveddel ── */}
        <div className="grid md:grid-cols-[1fr_260px] gap-16 items-start">

          {/* Tekst */}
          <div>
            <p
              className="text-fg leading-relaxed mb-6"
              style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", maxWidth: "58ch" }}
            >
              Jeg er designer. Jobber med UX, tjenestedesign og litt av alt.
              Og har fortsatt masse å lære.
            </p>

            <div className="space-y-4 text-muted leading-relaxed" style={{ maxWidth: "58ch" }}>
              <p>
                Veien hit gikk via markedsføring og informasjonsvitenskap, før
                et årsstudium i UX satte retningen. Tre studieprogrammer høres
                tilfeldig ut, og det var det nok litt. Men kombinasjonen har
                vist seg nyttig.
              </p>
              <p>
                Nå jobber jeg i et lite tverrfaglig team der design og utvikling
                sitter tett på hverandre.
              </p>
              <p>
                I det siste har jeg begynt å bygge designene mine selv, med
                litt hjelp fra AI. Det er for kjedelig å la ideer leve evig
                som skisser.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-10 border-t border-border">
              <p className="text-sm text-muted mb-5">
                Åpen for nye muligheter. Si hei.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-fg text-bg px-6 py-3 rounded-full text-sm font-semibold cursor-pointer hover:bg-accent transition-colors duration-200 focus-visible:rounded-full"
              >
                Ta kontakt
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Sidepanel */}
          <aside>
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm mb-8">
              <Image
                src="/helene-huseby.jpg"
                alt="Portrettfoto av Helene Huseby"
                width={600}
                height={600}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-[0.65rem] text-muted uppercase tracking-[0.12em] mb-3">
                  Fagfelt
                </h2>
                <p className="text-sm text-fg">Design</p>
              </div>

              <div>
                <h2 className="text-[0.65rem] text-muted uppercase tracking-[0.12em] mb-3">
                  Utdanning
                </h2>
                <ul className="space-y-1.5" aria-label="Min utdanning">
                  {[
                    "UX Design",
                    "Informasjonsvitenskap",
                    "Markedsføring",
                  ].map((degree) => (
                    <li key={degree} className="text-sm text-fg">
                      {degree}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
