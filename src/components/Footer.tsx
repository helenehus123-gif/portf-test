import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted">© 2026 Helene Huseby</p>
        <nav aria-label="Bunnnavigasjon">
          <ul className="flex items-center gap-6" role="list">
            {[
              { href: "/work", label: "Arbeid" },
              { href: "/about", label: "Om" },
              { href: "/contact", label: "Kontakt" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-muted cursor-pointer hover:text-fg transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
