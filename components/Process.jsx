"use client";

import { motion } from "framer-motion";
import { Target, Zap, Smartphone, Accessibility, ShieldCheck, Rocket } from "lucide-react";
import { engineeringPrinciples } from "@/lib/data";

const iconMap = { target: Target, zap: Zap, smartphone: Smartphone, accessibility: Accessibility, shield: ShieldCheck, rocket: Rocket };

const chipShadow = {
  grape: "shadow-clay-grape",
  sunny: "shadow-clay-sunny",
  sky: "shadow-clay-sky",
  teal: "shadow-clay-teal",
  coral: "shadow-clay-coral",
  clayGreen: "shadow-clay-green",
};
const chipBg = {
  grape: "bg-grape/15",
  sunny: "bg-sunny/15",
  sky: "bg-sky/15",
  teal: "bg-teal/15",
  coral: "bg-coral/15",
  clayGreen: "bg-clayGreen/15",
};
const chipText = {
  grape: "text-grape-dark",
  sunny: "text-sunny-dark",
  sky: "text-sky-dark",
  teal: "text-teal-dark",
  coral: "text-coral-dark",
  clayGreen: "text-clayGreen-dark",
};

export default function Process() {
  return (
    <section className="relative px-6 py-20" aria-label="Engineering principles">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-grape-dark">
            Engineering Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            How I Build Software
          </h2>
          <p className="max-w-xl mx-auto text-ink/60 mt-3">
            Every project follows the same standards for quality, maintainability, performance, accessibility, and long-term scalability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {engineeringPrinciples.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group clay-surface p-6 flex flex-col gap-3 transition-shadow duration-300 ${chipShadow[item.color]}`}
              >
                <span
                  className={`grid place-items-center w-11 h-11 rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${chipBg[item.color]} ${chipText[item.color]}`}
                >
                  <Icon size={20} />
                </span>
                <h3 className="font-display font-bold text-lg text-ink">
                  {item.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}