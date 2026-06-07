import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Carousel from "@/components/Carousel";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} · Helene Huseby` : "Prosjekt" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <article className="pt-32 pb-24">

      {/* ── Header ── */}
      <header className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted cursor-pointer hover:text-fg transition-colors duration-200 mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Tilbake
          </Link>

          <div className="flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
            <p className="text-[0.7rem] text-muted uppercase tracking-[0.15em]">
              {project.category}
            </p>
          </div>

          <h1
            className="font-display leading-tight tracking-tight break-words"
            style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)" }}
          >
            {project.title}
          </h1>
        </div>
      </header>

      {/* ── Hero ── */}
      {project.heroImage ? (
        <div
          className="w-full aspect-[3/2] md:aspect-[16/6] mb-20 relative overflow-hidden"
          role="img"
          aria-label={`Illustrasjon for prosjektet ${project.title}`}
        >
          <Image
            src={project.heroImage}
            alt={`Header for ${project.title}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : project.hero?.layout === "spread" ? (
        <div
          className="w-full aspect-[3/2] md:aspect-video mb-20 relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, #1e1e1c 0%, ${project.hero.background ?? "#0e0e0d"} 70%)`,
          }}
          role="img"
          aria-label={`Illustrasjon for prosjektet ${project.title}`}
        >
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-105%, -50%) rotate(${project.hero.images[0]?.rotation ?? 0}deg)`,
              filter: "drop-shadow(0 28px 56px rgba(0,0,0,0.85))",
              zIndex: 2,
            }}
          >
            <Image
              src={project.hero.images[0]!.src}
              alt={project.hero.images[0]!.alt}
              width={486}
              height={750}
              style={{ height: "clamp(155px, 40vw, 460px)", width: "auto" }}
            />
          </div>
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-25%, -50%) rotate(${project.hero.images[1]?.rotation ?? 0}deg)`,
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.7))",
              zIndex: 1,
            }}
          >
            <Image
              src={project.hero.images[1]!.src}
              alt={project.hero.images[1]!.alt}
              width={486}
              height={750}
              style={{ height: "clamp(125px, 33vw, 385px)", width: "auto" }}
            />
          </div>
        </div>
      ) : project.hero ? (
        <div
          className="w-full aspect-[3/2] md:aspect-video mb-20 overflow-hidden flex items-center justify-center gap-8 md:gap-14"
          style={{ backgroundColor: project.hero.background ?? "#141414" }}
          role="img"
          aria-label={`Illustrasjon for prosjektet ${project.title}`}
        >
          {project.hero.images.map((img) => (
            <div
              key={img.src}
              style={{
                transform: `rotate(${img.rotation ?? 0}deg)`,
                filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.65))",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={486}
                height={750}
                style={{ height: "clamp(130px, 36vw, 450px)", width: "auto" }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="w-full aspect-video mb-20"
          style={{ backgroundColor: project.color ?? "#EEEDE9" }}
          role="img"
          aria-label={`Illustrasjon for prosjektet ${project.title}`}
        />
      )}

      {/* ── Innhold ── */}
      <div className="px-6">
        <div className="max-w-3xl mx-auto">

          <p
            className="text-fg leading-relaxed mb-12"
            style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)", maxWidth: "65ch" }}
          >
            {project.description}
          </p>


          {/* Case study seksjoner */}
          <div className="space-y-16 border-t border-border pt-14">
            {[
              {
                defaultLabel: "Utfordring",
                key: "challenge" as const,
                imagesKey: "challengeImages" as const,
                placeholder: "Hva var problemet? Hva ønsket brukeren eller kunden?",
              },
              {
                defaultLabel: "Prosess",
                key: "process" as const,
                imagesKey: "processImages" as const,
                placeholder: "Hvordan ble arbeidet gjennomført?",
              },
              {
                defaultLabel: "Beslutninger",
                key: "decisions" as const,
                imagesKey: "decisionsImages" as const,
                placeholder: "Hvilke valg ble tatt, og hvorfor? Her vises tenkningen.",
              },
              {
                defaultLabel: "Resultater",
                key: "results" as const,
                imagesKey: "resultsImages" as const,
                placeholder: "Hva ble den målbare effekten?",
              },
              {
                defaultLabel: "Refleksjon",
                key: "reflection" as const,
                imagesKey: null,
                placeholder: "Hva lærte du? Hva ville du gjort annerledes?",
              },
            ].map(({ defaultLabel, key, imagesKey, placeholder }) => {
              const label = project.caseStudy?.labels?.[key] ?? defaultLabel;
              const content = project.caseStudy?.[key];
              const imageGroup = imagesKey ? project.caseStudy?.[imagesKey] : undefined;
              return (
                <section key={label} aria-labelledby={`section-${label}`}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    <h2
                      id={`section-${label}`}
                      className="font-display text-xl"
                    >
                      {label}
                    </h2>
                  </div>
                  {content ? (
                    <>
                      <p className="text-muted leading-relaxed mb-8" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}>
                        {content}
                      </p>
                      {imageGroup && imageGroup.items.length > 0 && (
                        imageGroup.display === "carousel" ? (
                          <Carousel images={imageGroup.items} />
                        ) : (
                          <div className={imageGroup.items.length === 1 ? "w-full" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
                            {imageGroup.items.map((img) => (
                              <figure key={img.src} className="m-0">
                                <div className="w-full overflow-hidden rounded-2xl bg-surface border border-border">
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                  />
                                </div>
                                {img.caption && (
                                  <figcaption className="mt-2 text-xs text-muted text-center">
                                    {img.caption}
                                  </figcaption>
                                )}
                              </figure>
                            ))}
                          </div>
                        )
                      )}
                    </>
                  ) : (
                    <div className="bg-surface rounded-2xl p-6 border border-border">
                      <p className="text-sm text-muted leading-relaxed">{placeholder}</p>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* ── Forrige / Neste ── */}
          <nav
            className="mt-20 pt-10 border-t border-border flex items-stretch justify-between gap-4"
            aria-label="Prosjektnavigasjon"
          >
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex-1 flex flex-col gap-1 cursor-pointer hover:text-accent transition-colors duration-200"
              >
                <span className="text-[0.65rem] text-muted uppercase tracking-[0.12em] flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" aria-hidden="true" />
                  Forrige
                </span>
                <span className="font-display text-base md:text-lg leading-tight group-hover:text-accent transition-colors duration-200">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group flex-1 flex flex-col gap-1 items-end text-right cursor-pointer hover:text-accent transition-colors duration-200"
              >
                <span className="text-[0.65rem] text-muted uppercase tracking-[0.12em] flex items-center gap-1">
                  Neste
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </span>
                <span className="font-display text-base md:text-lg leading-tight group-hover:text-accent transition-colors duration-200">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </nav>
        </div>
      </div>
    </article>
  );
}
