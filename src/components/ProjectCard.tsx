"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.title}, ${project.category}`}
        className="group flex items-center gap-5 md:gap-8 py-7 cursor-pointer focus-visible:rounded-lg min-h-[44px]"
      >
        {/* Fargeblokk / thumbnail */}
        <div
          className="w-20 h-14 md:w-28 md:h-20 rounded-xl flex-shrink-0 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]"
          style={{ backgroundColor: project.color ?? "#E8E5DD" }}
          aria-hidden="true"
        >
          {project.heroImage && (
            <Image
              src={project.heroImage}
              alt=""
              fill
              sizes="112px"
              className="object-cover"
            />
          )}
        </div>

        {/* Innhold */}
        <div className="flex-1 min-w-0">
          <p className="text-[0.65rem] text-muted uppercase tracking-[0.12em] mb-1.5">
            {project.category}
          </p>
          <h3 className="font-display text-lg md:text-xl leading-snug group-hover:text-accent transition-colors duration-200 break-words mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-1 hidden sm:block">
            {project.description}
          </p>
        </div>

        {/* Pil */}
        <ArrowRight
          className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
