"use client";

import { motion } from "framer-motion";
import { SkillIcon } from "@/lib/icons";
import { coreSkills, toolSkills } from "@/lib/data";

const chipShadow = {
  coral: "shadow-clay-coral",
  sky: "shadow-clay-sky",
  sunny: "shadow-clay-sunny",
  teal: "shadow-clay-teal",
  grape: "shadow-clay-grape",
  green: "shadow-clay-green",
  ink: "shadow-clay-md",
};

const chipText = {
  coral: "text-coral-dark",
  sky: "text-sky-dark",
  sunny: "text-sunny-dark",
  teal: "text-teal-dark",
  grape: "text-grape-dark",
  green: "text-clayGreen-dark",
  ink: "text-ink",
};

const chipBg = {
  coral: "bg-coral/10",
  sky: "bg-sky/10",
  sunny: "bg-sunny/10",
  teal: "bg-teal/10",
  grape: "bg-grape/10",
  green: "bg-clayGreen/10",
  ink: "bg-ink/5",
};

function SkillTile({ skill, index }) {
  // Every 4th tile stretches wide for a playful bento rhythm —
  // still small, just enough variety to avoid a flat uniform grid.
  const isWide = index % 4 === 3;

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.85, y: 14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.045 }}
      whileHover={{ y: -6, scale: 1.05, rotate: -1 }}
      className={isWide ? "col-span-2" : "col-span-1"}
    >
      <div
        className={`clay-surface h-full rounded-[2.25rem] cursor-default transition-shadow duration-300 ${chipShadow[skill.color]} ${
          isWide
            ? "flex items-center gap-3 px-5 py-4"
            : "flex flex-col items-center justify-center gap-2 px-3 py-5 text-center"
        }`}
      >
        <span
          className={`grid place-items-center shrink-0 rounded-2xl ${chipBg[skill.color]} ${
            isWide ? "w-11 h-11" : "w-12 h-12"
          }`}
        >
          <SkillIcon
            name={skill.icon}
            className={`${isWide ? "text-xl" : "text-2xl"} ${chipText[skill.color]}`}
          />
        </span>
        <span className="text-xs sm:text-sm font-semibold text-ink/80 leading-snug">
          {skill.name}
        </span>
      </div>
    </motion.li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24" aria-label="Skills">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-sunny-dark">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            What I build with
          </h2>
        </motion.div>

        <div className="mb-16">
          <h3 className="font-display font-bold text-xl text-grape-dark mb-6 text-center">
            Core Skills
          </h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {coreSkills.map((skill, i) => (
              <SkillTile skill={skill} index={i} key={skill.name} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl text-grape-dark mb-6 text-center">
            Frameworks &amp; Libraries
          </h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {toolSkills.map((skill, i) => (
              <SkillTile skill={skill} index={i} key={skill.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
// jij
