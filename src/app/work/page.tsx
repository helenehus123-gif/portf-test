import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Arbeid · Helene Huseby",
};

export default function Work() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Etikett */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
          <p className="text-[0.7rem] text-muted uppercase tracking-[0.15em]">Arbeid</p>
        </div>

        <h1
          className="font-display leading-[0.9] tracking-tight mb-4"
          style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
        >
          Prosjekter<span className="text-accent">.</span>
        </h1>
        <p className="text-muted max-w-lg leading-relaxed mb-16" style={{ fontSize: "clamp(1rem, 1.2vw, 1.05rem)" }}>
          Valgt fordi de viser noe, ikke fordi de ble pene.
        </p>

        {/* Nummerert liste */}
        <ol
          className="divide-y divide-border"
          aria-label="Prosjekter"
        >
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex items-start gap-6 md:gap-10 py-10 cursor-pointer focus-visible:rounded-lg min-h-[44px]"
              >
                {/* Nummer */}
                <span
                  className="font-display text-sm text-muted tabular-nums w-6 flex-shrink-0 pt-1 select-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Innhold */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="font-display text-xl md:text-2xl leading-tight group-hover:text-accent transition-colors duration-200 break-words">
                      {project.title}
                    </h2>
                    <div className="hidden sm:flex items-center gap-4 text-sm text-muted flex-shrink-0 pt-1">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex sm:hidden items-center gap-3 text-xs text-muted mt-2">
                    <span>{project.category}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
