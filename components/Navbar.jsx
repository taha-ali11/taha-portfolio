"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { navLinks, socials } from "@/lib/data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-5xl flex items-center justify-between gap-4 px-4 sm:px-6 py-3 rounded-full bg-[#EFEAFA]/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-clay-md" : "shadow-clay-lg"
        }`}
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display text-lg sm:text-xl font-bold text-grape-dark shrink-0"
        >
          Taha Ali
        </a>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-3 lg:px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-ink/70 hover:text-grape-dark"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-grape shadow-clay-grape -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Taha Ali on Instagram"
            className="grid place-items-center w-10 h-10 rounded-full bg-[#EFEAFA] shadow-clay-sm hover:shadow-clay-coral hover:text-coral transition-all"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Taha Ali on LinkedIn"
            className="grid place-items-center w-10 h-10 rounded-full bg-[#EFEAFA] shadow-clay-sm hover:shadow-clay-sky hover:text-sky transition-all"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, "#connect")}
            className="ml-1 px-4 py-2 rounded-full border-2 border-grape-dark/60 bg-grape text-white text-sm font-semibold shadow-[0_4px_0_0_#6C4FD6] hover:-translate-y-0.5 hover:shadow-[0_5px_0_0_#6C4FD6] active:translate-y-0.5 active:shadow-[0_2px_0_0_#6C4FD6] transition-all duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full bg-[#EFEAFA] shadow-clay-sm shrink-0"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 w-[calc(100%-2rem)] max-w-sm mx-4 rounded-clay bg-[#EFEAFA] shadow-clay-lg p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-3 rounded-2xl text-sm font-semibold text-ink/80 hover:bg-clay-lilac hover:text-grape-dark transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "#connect")}
              className="mt-2 block text-center px-4 py-3 rounded-full border-2 border-grape-dark/60 bg-grape text-white text-sm font-semibold shadow-[0_4px_0_0_#6C4FD6]"
            >
              Let&apos;s Talk
            </a>
            <div className="flex items-center gap-2 mt-3 px-4">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Taha Ali on Instagram"
                className="grid place-items-center w-10 h-10 rounded-full bg-cloud shadow-clay-sm"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Taha Ali on LinkedIn"
                className="grid place-items-center w-10 h-10 rounded-full bg-cloud shadow-clay-sm"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
