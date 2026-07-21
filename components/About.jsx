"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, ShieldCheck, Wrench } from "lucide-react";
import { SkillIcon } from "@/lib/icons";
import { aboutSkillIcons, stats } from "@/lib/data";
import Image from "next/image";
import Profile from "@/public/profile.png";

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const blocks = [
  {
    icon: GraduationCap,
    title: "Who I Am",
    color: "text-teal-dark",
    bg: "bg-teal/20",
    body: "A freelance full-stack developer based in Lahore, Pakistan. BS in Computer Science from the University of Central Punjab. I founded AlphaGeeks, my agency, and split my time between running it and independent client work.",
  },
  {
    icon: Sparkles,
    title: "What I Do",
    color: "text-grape-dark",
    bg: "bg-grape/20",
    body: "I build full-stack Next.js sites, wire animation in with Framer Motion and Anime.js, and increasingly build AI automation that plugs directly into a client's workflow — not a chatbot bolted onto a homepage.",
  },
  {
    icon: ShieldCheck,
    title: "What Makes Me Different",
    color: "text-clayGreen-dark",
    bg: "bg-clayGreen/20",
    body: "Most sites look like the same starter kit. Mine don't — every animation earns its place instead of decorating. And security is wired in from day one: input validation, sanitized data, and secure auth, not bolted on after launch.",
  },
  {
    icon: Wrench,
    title: "Technologies I Use",
    color: "text-coral-dark",
    bg: "bg-coral/20",
    body: null, // rendered as icon chips below instead of prose
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24" aria-label="About me">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-teal-dark">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            The Brain in the Stack
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Left column: four scannable blocks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 clay-surface p-8 sm:p-10 flex flex-col gap-8"
          >
            {blocks.map((block) => (
              <div key={block.title}>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`grid place-items-center w-10 h-10 rounded-2xl shrink-0 shadow-clay-sm ${block.bg} ${block.color}`}
                  >
                    <block.icon size={19} />
                  </span>
                  <h3 className="font-display font-bold text-lg text-ink">
                    {block.title}
                  </h3>
                </div>

                {block.body ? (
                  <p className="text-ink/70 leading-relaxed pl-[3.25rem]">
                    {block.body}
                  </p>
                ) : (
                  <ul className="flex flex-wrap gap-3 pl-[3.25rem]">
                    {aboutSkillIcons.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-[1.75rem] bg-cloud shadow-clay-sm text-sm font-semibold text-ink/80"
                      >
                        <SkillIcon name={skill.icon} className="text-grape-dark" />
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right column: picture — sized up, stronger visual weight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 clay-surface p-4 sm:p-5 flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Gradient ring — the visible "frame" edge */}
              <div className="absolute inset-0 rounded-blob bg-[linear-gradient(135deg,rgba(140,111,230,0.45),rgba(95,182,232,0.4)_35%,rgba(62,213,201,0.4)_65%,rgba(52,211,153,0.45))] shadow-clay-lg" />
              <div className="absolute inset-[14px] sm:inset-4 rounded-blob overflow-hidden clay-pressed grid place-items-center bg-clay-lilac">
                <Image
                  src={Profile}
                  alt="Portrait of Taha Ali"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover rounded-blob"
                  priority
                />
                {/* Glossy inner highlight for extra puffed-dome feel */}
                <div className="absolute -top-6 -left-6 w-2/3 h-2/3 rounded-full bg-white/50 blur-2xl pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row spanning both columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="clay-surface py-6 px-3 sm:px-6 text-center shadow-clay-sm"
            >
              <p className="font-display text-2xl sm:text-4xl font-extrabold text-gradient">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-ink/60 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <a
            href="#connect"
            onClick={scrollTo("#connect")}
            className="px-7 py-3.5 rounded-full border-2 border-sunny-dark/70 bg-sunny text-ink font-bold shadow-[0_8px_0_0_#E0B02E,0_18px_30px_-10px_rgba(224,176,46,0.55)] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#E0B02E,0_22px_34px_-10px_rgba(224,176,46,0.6)] active:translate-y-1 active:shadow-[0_4px_0_0_#E0B02E,0_10px_18px_-8px_rgba(224,176,46,0.5)] transition-all duration-300"
          >
            Got a Vision? I&apos;ve Got the Stack
          </a>
        </div>
      </div>
    </section>
  );
}
