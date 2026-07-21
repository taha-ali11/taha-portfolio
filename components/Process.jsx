"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    color: "grape",
    body: "A short call to understand what you're building, who it's for, and what success actually looks like.",
  },
  {
    icon: PenTool,
    title: "Design",
    color: "coral",
    body: "Structure and visual direction mapped out before a single line of code, so there are no surprises mid-build.",
  },
  {
    icon: Code2,
    title: "Develop",
    color: "sky",
    body: "Clean, maintainable Next.js code — built in the open with regular check-ins, not a black box until launch day.",
  },
  {
    icon: Rocket,
    title: "Launch",
    color: "green",
    body: "Deployed, tested across devices, and handed off with the docs you need to keep it running without me.",
  },
];

const chipShadow = {
  grape: "shadow-clay-grape",
  coral: "shadow-clay-coral",
  sky: "shadow-clay-sky",
  green: "shadow-clay-green",
};
const chipBg = {
  grape: "bg-grape/15",
  coral: "bg-coral/15",
  sky: "bg-sky/15",
  green: "bg-clayGreen/15",
};
const chipText = {
  grape: "text-grape-dark",
  coral: "text-coral-dark",
  sky: "text-sky-dark",
  green: "text-clayGreen-dark",
};

export default function Process() {
  return (
    <section className="relative px-6 py-24" aria-label="How I work">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-grape-dark">
            How I Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            Four steps, no surprises
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`clay-surface p-6 flex flex-col gap-3 ${chipShadow[step.color]}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid place-items-center w-11 h-11 rounded-2xl shrink-0 ${chipBg[step.color]} ${chipText[step.color]}`}
                >
                  <step.icon size={20} />
                </span>
                <span className={`text-xs font-bold ${chipText[step.color]}`}>
                  Step {i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-ink">
                {step.title}
              </h3>
              <p className="text-ink/70 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
