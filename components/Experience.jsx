"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const accentShadow = {
  grape: "shadow-clay-grape",
  sky: "shadow-clay-sky",
  teal: "shadow-clay-teal",
  coral: "shadow-clay-coral",
};

const accentBg = {
  grape: "bg-grape/15",
  sky: "bg-sky/15",
  teal: "bg-teal/15",
  coral: "bg-coral/15",
};

const accentText = {
  grape: "text-grape-dark",
  sky: "text-sky-dark",
  teal: "text-teal-dark",
  coral: "text-coral-dark",
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLarge = project.size === "large";
  const Wrapper = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
      className={isLarge ? "md:col-span-2" : "md:col-span-1"}
    >
      <Wrapper
        {...linkProps}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative block h-full clay-surface p-6 sm:p-8 ${accentShadow[project.accent]} overflow-hidden focus-visible:outline focus-visible:outline-3 focus-visible:outline-grape-dark`}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="h-full flex flex-col justify-between gap-6"
        >
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {project.name}
                </h3>
                <p className={`text-sm font-semibold mt-1 ${accentText[project.accent]}`}>
                  {project.role}
                </p>
              </div>
              {project.link && (
                <span
                  className={`grid place-items-center w-10 h-10 rounded-full shrink-0 ${accentBg[project.accent]} ${accentText[project.accent]} group-hover:rotate-45 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={18} />
                </span>
              )}
            </div>
            <p className="text-ink/70 mt-4 leading-relaxed">{project.purpose}</p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cloud text-ink/70 shadow-clay-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
      </Wrapper>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-24"
      aria-label="Experience and case studies"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-coral-dark">
            Experience &amp; Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            Real projects, real problems solved
          </h2>
          <p className="max-w-xl mx-auto text-ink/60 mt-3">
            Four projects that shaped the last two years — hover a card to
            feel it lift, tap through to see the live build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
