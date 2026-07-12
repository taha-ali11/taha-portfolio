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
  ink: "shadow-clay-md",
};

const chipText = {
  coral: "text-coral-dark",
  sky: "text-sky-dark",
  sunny: "text-sunny-dark",
  teal: "text-teal-dark",
  grape: "text-grape-dark",
  ink: "text-ink",
};

function SkillChip({ skill, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.04 }}
      className={`clay-surface flex items-center gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 cursor-default ${chipShadow[skill.color]}`}
    >
      <SkillIcon name={skill.icon} className={`text-lg shrink-0 ${chipText[skill.color]}`} />
      <span className="text-sm font-semibold text-ink/80 whitespace-nowrap">
        {skill.name}
      </span>
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

        <div className="mb-14">
          <h3 className="font-display font-bold text-xl text-grape-dark mb-5 text-center sm:text-left">
            Core Skills
          </h3>
          <ul className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            {coreSkills.map((skill, i) => (
              <SkillChip skill={skill} index={i} key={skill.name} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl text-grape-dark mb-5 text-center sm:text-left">
            Frameworks &amp; Libraries
          </h3>
          <ul className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            {toolSkills.map((skill, i) => (
              <SkillChip skill={skill} index={i} key={skill.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
