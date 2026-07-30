"use client";

import { motion } from "framer-motion";
import { Layout, Server, Palette, Gauge, Rocket, GraduationCap, CheckCircle2 } from "lucide-react";
import { SkillIcon } from "@/lib/icons";
import { engineeringCapabilities, techCloud, deliverables } from "@/lib/data";

const capIconMap = {
  frontend: Layout,
  backend: Server,
  uiEngineering: Palette,
  performance: Gauge,
  deployment: Rocket,
  learning: GraduationCap,
};

const chipShadow = {
  grape: "shadow-clay-grape",
  sky: "shadow-clay-sky",
  coral: "shadow-clay-coral",
  sunny: "shadow-clay-sunny",
  teal: "shadow-clay-teal",
  clayGreen: "shadow-clay-green",
  ink: "shadow-clay-md",
};
const chipBg = {
  grape: "bg-grape/15",
  sky: "bg-sky/15",
  coral: "bg-coral/15",
  sunny: "bg-sunny/15",
  teal: "bg-teal/15",
  clayGreen: "bg-clayGreen/15",
  ink: "bg-ink/5",
};
const chipText = {
  grape: "text-grape-dark",
  sky: "text-sky-dark",
  coral: "text-coral-dark",
  sunny: "text-sunny-dark",
  teal: "text-teal-dark",
  clayGreen: "text-clayGreen-dark",
  ink: "text-ink",
};

function CapabilityCard({ item, index }) {
  const Icon = capIconMap[item.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -5 }}
      className={`clay-surface p-6 flex flex-col gap-3 transition-shadow duration-300 ${chipShadow[item.color]}`}
    >
      <span
        className={`grid place-items-center w-11 h-11 rounded-2xl shrink-0 ${chipBg[item.color]} ${chipText[item.color]}`}
      >
        <Icon size={20} />
      </span>
      <h3 className="font-display font-bold text-lg text-ink">{item.title}</h3>
      <p className="text-ink/70 text-sm leading-relaxed">{item.body}</p>
      <ul className="flex flex-wrap gap-1.5 mt-1">
        {item.tech.map((t) => (
          <li
            key={t}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-cloud text-ink/70 shadow-clay-sm"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// Same flowing pill layout as before — only the icon color now reflects
// the tech's original category color instead of a single uniform grape.
function TechPill({ item, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3, delay: index * 0.015 }}
      whileHover={{ y: -3 }}
      className="group relative"
    >
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-cloud shadow-clay-sm text-sm font-semibold text-ink/80 transition-shadow duration-300 cursor-default ${chipShadow[item.color]}`}
      >
        <SkillIcon name={item.icon} className={`text-base ${chipText[item.color]}`} />
        {item.name}
      </div>
      {/* tooltip */}
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink text-cloud text-xs font-semibold px-3 py-1 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-10">
        {item.name}
      </span>
    </motion.li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20" aria-label="Engineering stack">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-sunny-dark">
            Engineering Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            What I build with
          </h2>
          <p className="max-w-xl mx-auto text-ink/60 mt-3">
            The technologies I use to build scalable, secure, and production-ready applications.
          </p>
        </motion.div>

        {/* Top layer — capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {engineeringCapabilities.map((item, i) => (
            <CapabilityCard item={item} index={i} key={item.title} />
          ))}
        </div>

        {/* Bottom layer — full tech cloud, each pill colored to match its
            original category (frontend/backend/db/etc.) */}
        <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-10">
          {techCloud.map((item, i) => (
            <TechPill item={item} index={i} key={item.name} />
          ))}
        </ul>

        {/* What I Deliver */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="clay-surface shadow-clay-grape p-8 sm:p-10 mt-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl text-ink">What I Deliver</h3>
            <p className="text-ink/60 mt-2 max-w-md mx-auto">
              The outcomes clients and teams can expect when working with me.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-ink/80 font-semibold text-sm">
                <CheckCircle2 size={17} className="shrink-0 text-clayGreen-dark" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}