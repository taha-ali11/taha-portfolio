"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck } from "lucide-react";
import { SkillIcon } from "@/lib/icons";
import { aboutSkillIcons, stats } from "@/lib/data";

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

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
            The person behind the code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Left column: intro, vision, skill icons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 clay-surface p-8 sm:p-10 flex flex-col gap-6"
          >
            <div className="flex items-start gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-teal/20 text-teal-dark shrink-0 shadow-clay-sm">
                <GraduationCap size={22} />
              </span>
              <p className="text-ink/80 leading-relaxed">
                I&apos;m a BS Science graduate from{" "}
                <strong className="text-ink">
                  University of Central Punjab (UCP)
                </strong>
                , working out of Lahore as a freelance developer and
                entrepreneur. I run my own agency, AlphaGeeks, alongside
                independent client work.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg text-grape-dark mb-1">
                My vision
              </h3>
              <p className="text-ink/70 leading-relaxed">
                Most portfolios and product sites look interchangeable —
                same layout, same motion, same fonts. I build the opposite:
                interfaces with a distinct visual identity, animated with
                intent rather than decoration, and backed by clean,
                maintainable code underneath.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg text-grape-dark mb-1">
                Where I focus
              </h3>
              <p className="text-ink/70 leading-relaxed">
                Full-stack web development with Next.js and React, motion
                design with Framer Motion and Anime.js, and — increasingly —
                wiring AI automation and AI agents into real client
                workflows, not just chat widgets bolted onto a homepage.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={18} className="text-clayGreen-dark shrink-0" />
                <h3 className="font-display font-bold text-lg text-grape-dark">
                  Security-conscious by habit
                </h3>
              </div>
              <p className="text-ink/70 leading-relaxed">
                I've also picked up the basics of cybersecurity — enough to
                build with input validation, sanitized data handling, and
                secure authentication patterns from day one, so client sites
                don't just look good, they hold up under real-world use.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg text-grape-dark mb-3">
                Tools I reach for daily
              </h3>
              <ul className="flex flex-wrap gap-3">
                {aboutSkillIcons.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-cloud shadow-clay-sm text-sm font-semibold text-ink/80"
                  >
                    <SkillIcon name={skill.icon} className="text-grape-dark" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column: picture */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 clay-surface p-6 flex items-center justify-center"
          >
            <div className="relative w-full aspect-[4/5] max-w-xs mx-auto">
              <div className="absolute inset-0 rounded-blob bg-gradient-to-br from-grape/25 via-teal/20 to-sunny/25 shadow-clay-md" />
              {/*
                Replace the placeholder below with:
                <Image src="/profile.jpg" alt="Portrait of Taha Ali" fill
                  className="object-cover rounded-blob" />
              */}
              <div className="absolute inset-4 rounded-blob overflow-hidden clay-pressed grid place-items-center bg-clay-lilac">
                <span className="text-ink/40 text-sm text-center px-6">
                  Add your photo at{" "}
                  <code className="font-mono">/public/profile.jpg</code>
                </span>
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
          className="grid grid-cols-3 gap-4 sm:gap-6 mt-8"
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
            className="px-7 py-3.5 rounded-full bg-sunny text-ink font-bold shadow-[0_8px_0_0_#E0B02E,0_18px_30px_-10px_rgba(224,176,46,0.55)] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#E0B02E,0_22px_34px_-10px_rgba(224,176,46,0.6)] active:translate-y-1 active:shadow-[0_4px_0_0_#E0B02E,0_10px_18px_-8px_rgba(224,176,46,0.5)] transition-all duration-300"
          >
            Start a Project With Me
          </a>
        </div>
      </div>
    </section>
  );
}
