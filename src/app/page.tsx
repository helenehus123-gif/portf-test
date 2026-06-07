import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";


export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6" aria-labelledby="hero-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_260px] gap-10 md:gap-16 items-end">

            {/* Venstre: tekst */}
            <div>
              <p
                className="text-[0.7rem] text-muted uppercase tracking-[0.15em] mb-10 motion-safe:animate-fade-up"
                style={{ animationDelay: "0ms" }}
              >
                Designer · Oslo
              </p>

              <h1
                id="hero-heading"
                className="font-display leading-[0.88] tracking-tight mb-8 motion-safe:animate-fade-up"
                style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)", animationDelay: "60ms" }}
              >
                Helene
                <br />
                Huseby<span className="text-accent">.</span>
              </h1>

              <p
                className="text-muted leading-relaxed mb-10 motion-safe:animate-fade-up"
                style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)", maxWidth: "40ch", animationDelay: "120ms" }}
              >
                Jobber med UX, tjenestedesign og systemdesign. Av og til
                noe grafisk når det trengs.
              </p>

              <div
                className="flex flex-wrap gap-3 motion-safe:animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-fg text-bg px-6 py-3 rounded-full text-sm font-semibold cursor-pointer hover:bg-accent transition-colors duration-200 focus-visible:rounded-full"
                >
                  Si hei
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Høyre: foto */}
            <div
              className="hidden md:block motion-safe:animate-fade-up"
              style={{ animationDelay: "240ms" }}
              aria-hidden="true"
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/helene-huseby.jpg"
                  alt="Portrettfoto av Helene Huseby"
                  width={520}
                  height={693}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Utvalgt arbeid ── */}
      <section className="py-16 px-6" aria-labelledby="featured-heading">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-baseline mb-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
              <p className="text-[0.7rem] text-muted uppercase tracking-[0.15em]">Utvalgt arbeid</p>
            </div>
          </div>

          <h2 id="featured-heading" className="font-display text-2xl mb-10">Prosjekter<span className="text-accent">.</span></h2>

          <div className="divide-y divide-border border-t border-border">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Kontakt-strip ── */}
      <section className="py-14 px-6 bg-surface border-t border-border" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 id="cta-heading" className="font-display text-xl mb-1">Åpen for nye muligheter<span className="text-accent">.</span></h2>
            <p className="text-sm text-muted">Si gjerne hei om du har noe på hjertet.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-fg text-bg px-6 py-3 rounded-full text-sm font-semibold cursor-pointer hover:bg-accent transition-colors duration-200 focus-visible:rounded-full flex-shrink-0"
          >
            Ta kontakt
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
