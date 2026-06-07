"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/about", label: "Om" },
  { href: "/contact", label: "Kontakt" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/92 backdrop-blur-md border-b border-border">
      <nav
        className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Hovednavigasjon"
      >
        {/* Logo med hover-detalj */}
        <Link
          href="/"
          aria-label="Til forsiden"
          className="group flex items-baseline gap-1.5 cursor-pointer focus-visible:rounded min-h-[44px] items-center"
        >
          <span className="font-display text-sm font-bold tracking-tight group-hover:text-accent transition-colors duration-200">
            Helene Huseby
          </span>
          <span
            className="text-[0.6rem] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none"
            aria-hidden="true"
          >
            (potetdesigner)
          </span>
        </Link>

        {/* Navigasjonslenker med touch targets */}
        <ul className="flex items-center gap-1" role="list">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    inline-flex items-center px-3 min-h-[44px] text-sm cursor-pointer
                    transition-colors duration-200 rounded-md
                    ${isActive ? "text-fg font-semibold" : "text-muted hover:text-fg hover:bg-surface"}
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="https://www.linkedin.com/in/helene-huseby/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 px-3 min-h-[44px] text-sm text-muted cursor-pointer hover:text-fg transition-colors duration-200 rounded-md"
            >
              LinkedIn
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
              <span className="sr-only"> (åpnes i ny fane)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
