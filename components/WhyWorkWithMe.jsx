"use client";

import { motion } from "framer-motion";
import { MessageCircle, Gauge, GitBranch } from "lucide-react";

const reasons = [
  {
    icon: MessageCircle,
    title: "Fast Communication",
    color: "grape",
    body: "You'll hear back within a day, not a week. No chasing me for updates — I'll flag blockers before you have to ask.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    color: "sky",
    body: "Every site is built to load fast on a real phone, not just a fast office wifi connection during a demo.",
  },
  {
    icon: GitBranch,
    title: "Maintainable Code",
    color: "green",
    body: "Structured, documented, and handed off cleanly — so if you bring in another developer later, they won't have to start over.",
  },
];

const chipShadow = {
  grape: "shadow-clay-grape",
  sky: "shadow-clay-sky",
  green: "shadow-clay-green",
};
const chipBg = {
  grape: "bg-grape/15",
  sky: "bg-sky/15",
  green: "bg-clayGreen/15",
};
const chipText = {
  grape: "text-grape-dark",
  sky: "text-sky-dark",
  green: "text-clayGreen-dark",
};

export default function WhyWorkWithMe() {
  return (
    <section className="relative px-6 py-24" aria-label="Why work with me">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-coral-dark">
            Why Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            What you actually get
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`clay-surface p-7 flex flex-col gap-3 ${chipShadow[reason.color]}`}
            >
              <span
                className={`grid place-items-center w-12 h-12 rounded-2xl shrink-0 ${chipBg[reason.color]} ${chipText[reason.color]}`}
              >
                <reason.icon size={22} />
              </span>
              <h3 className="font-display font-bold text-lg text-ink">
                {reason.title}
              </h3>
              <p className="text-ink/70 text-sm leading-relaxed">{reason.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
