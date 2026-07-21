"use client";

import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Mail, FileText, MapPin } from "lucide-react";
import { navLinks, socials, availability } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pb-8 pt-4">
      <div className="max-w-6xl mx-auto clay-surface px-6 sm:px-10 py-8 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
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

        <div className="h-px bg-ink/10" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm font-semibold text-ink/60">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-clayGreen" aria-hidden="true" />
              {availability.status}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" />
              {availability.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Taha Ali's resume"
              className="grid place-items-center w-9 h-9 rounded-full bg-cloud shadow-clay-sm hover:text-grape-dark transition-colors"
            >
              <FileText size={15} />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Taha Ali on GitHub"
              className="grid place-items-center w-9 h-9 rounded-full bg-cloud shadow-clay-sm hover:text-ink transition-colors"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Taha Ali on LinkedIn"
              className="grid place-items-center w-9 h-9 rounded-full bg-cloud shadow-clay-sm hover:text-sky transition-colors"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Taha Ali on Instagram"
              className="grid place-items-center w-9 h-9 rounded-full bg-cloud shadow-clay-sm hover:text-coral transition-colors"
            >
              <FaInstagram size={15} />
            </a>
            <a
              href={socials.mail}
              aria-label="Email Taha Ali"
              className="grid place-items-center w-9 h-9 rounded-full bg-cloud shadow-clay-sm hover:text-sunny-dark transition-colors"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
