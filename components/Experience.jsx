"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronDown, CheckCircle2 } from "lucide-react";
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
  const [expanded, setExpanded] = useState(false);
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
  const detailId = `case-study-${project.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
      className={isLarge ? "md:col-span-2" : "md:col-span-1"}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative h-full clay-surface p-6 sm:p-8 ${accentShadow[project.accent]} overflow-hidden`}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="flex flex-col gap-6"
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit the live ${project.name} site`}
                  data-cursor-hover
                  className={`grid place-items-center w-10 h-10 rounded-full shrink-0 ${accentBg[project.accent]} ${accentText[project.accent]} hover:rotate-45 transition-transform duration-300 focus-visible:outline focus-visible:outline-3 focus-visible:outline-grape-dark`}
                >
                  <ArrowUpRight size={18} />
                </a>
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

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={detailId}
            className={`self-start flex items-center gap-1.5 text-sm font-semibold ${accentText[project.accent]} hover:opacity-75 transition-opacity focus-visible:outline focus-visible:outline-3 focus-visible:outline-grape-dark rounded-lg`}
          >
            {expanded ? "Hide case study" : "Read the case study"}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={detailId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-5 pt-2 border-t border-ink/10">
                  <div className="pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1">
                      Problem
                    </h4>
                    <p className="text-ink/70 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1">
                      Solution
                    </h4>
                    <p className="text-ink/70 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1">
                      Outcome
                    </h4>
                    <p className="text-ink/70 text-sm leading-relaxed">{project.outcome}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-2">
                      Key Features
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-ink/70 text-sm leading-relaxed"
                        >
                          <CheckCircle2
                            size={15}
                            className={`shrink-0 mt-0.5 ${accentText[project.accent]}`}
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
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
            Four projects that shaped the last year — open a case study for
            the problem, the fix, and the result, or jump straight to the
            live build.
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
