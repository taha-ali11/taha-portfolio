"use client";

import { navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pb-8 pt-4">
      <div className="max-w-6xl mx-auto clay-surface px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-sm text-ink/60">
            © {year} Taha Ali. All rights reserved.
          </p>
          <p className="text-xs text-ink/40">Built by Taha Ali</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-semibold text-ink/70 hover:text-grape-dark transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
