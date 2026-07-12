"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";
import ClayBlob from "./ClayBlob";
import { socials, agencySocials } from "@/lib/data";

const contactChannels = [
  {
    label: "WhatsApp",
    href: socials.whatsapp,
    icon: FaWhatsapp,
    color: "teal",
  },
  {
    label: "Instagram",
    href: socials.instagram,
    icon: FaInstagram,
    color: "coral",
  },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    icon: FaLinkedinIn,
    color: "sky",
  },
  {
    label: "Email",
    href: socials.mail,
    icon: Mail,
    color: "sunny",
  },
];

const colorClasses = {
  teal: "text-teal-dark shadow-clay-teal",
  coral: "text-coral-dark shadow-clay-coral",
  sky: "text-sky-dark shadow-clay-sky",
  sunny: "text-sunny-dark shadow-clay-sunny",
};

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative px-6 py-24 overflow-hidden"
      aria-label="Connect with me"
    >
      <ClayBlob
        className="w-72 h-72 -bottom-16 -left-16"
        colorClass="bg-sunny/25"
      />
      <ClayBlob
        className="w-64 h-64 -top-10 -right-10"
        colorClass="bg-grape/20"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-teal-dark">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            Got a project worth building well?
          </h2>
          <p className="max-w-xl mx-auto text-ink/70 mt-4 leading-relaxed">
            If it involves a screen, a database, or an automation that keeps
            you up at night — I want to hear about it. Pick whichever
            channel below feels easiest and tell me what you&apos;re
            trying to build.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 max-w-2xl mx-auto"
        >
          {contactChannels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex flex-col items-center gap-3 clay-surface py-7 px-4 hover:-translate-y-1.5 transition-all duration-300 ${colorClasses[channel.color]}`}
              >
                <channel.icon size={26} aria-hidden="true" />
                <span className="text-sm font-semibold text-ink/80">
                  {channel.label}
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Agency callout for non-web-dev inquiries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="clay-surface mt-14 p-8 sm:p-10 text-left sm:flex sm:items-center sm:justify-between sm:gap-8"
        >
          <div>
            <h3 className="font-display font-bold text-xl text-grape-dark">
              Need more than a website?
            </h3>
            <p className="text-ink/70 mt-2 max-w-md leading-relaxed">
              For SEO, ads, branding, or full digital marketing beyond web
              development, my agency <strong>AlphaGeeks</strong> has a team
              ready to take it on.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={agencySocials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AlphaGeeks on Instagram"
                className="grid place-items-center w-9 h-9 rounded-full bg-cloud shadow-clay-sm hover:text-coral transition-colors"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href={agencySocials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AlphaGeeks on LinkedIn"
                className="grid place-items-center w-9 h-9 rounded-full bg-cloud shadow-clay-sm hover:text-sky transition-colors"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>
          <a
            href={agencySocials.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-0 shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-grape text-white font-semibold shadow-clay-grape hover:-translate-y-1 hover:shadow-clay-lg transition-all duration-300"
          >
            Visit AlphaGeeks
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
