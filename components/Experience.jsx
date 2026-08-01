"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";

const accentShadow = {
  grape: "shadow-clay-grape",
  sky: "shadow-clay-sky",
  teal: "shadow-clay-teal",
  coral: "shadow-clay-coral",
  clayGreen: "shadow-clay-green",
};

const accentBg = {
  grape: "bg-grape/15",
  sky: "bg-sky/15",
  teal: "bg-teal/15",
  coral: "bg-coral/15",
  clayGreen: "bg-clayGreen/15",
};

const accentText = {
  grape: "text-grape-dark",
  sky: "text-sky-dark",
  teal: "text-teal-dark",
  coral: "text-coral-dark",
  clayGreen: "text-clayGreen-dark",
};

function ProjectTabs({ projects, activeId, onSelect }) {
  return (
    <div
      role="tablist"
      aria-label="Select a project"
      className="flex flex-wrap justify-center gap-2 clay-surface p-2 max-w-full overflow-x-auto"
    >
      {projects.map((project) => {
        const isActive = project.id === activeId;
        return (
          <button
            key={project.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(project.id)}
            className={`relative shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-grape-dark ${
              isActive ? "text-grape-dark" : "text-ink/70 hover:text-grape-dark"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="experience-tab-pill"
                className="absolute inset-0 rounded-full bg-grape shadow-clay-grape -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {project.name}
            {project.status === "in-development" && (
              <span
                className={`ml-1.5 inline-block w-1.5 h-1.5 rounded-full align-middle ${
                  isActive ? "bg-white" : "bg-clayGreen-dark"
                } animate-pulse`}
                aria-hidden="true"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

function ProjectPanel({ project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`clay-surface p-6 sm:p-10 ${accentShadow[project.accent]}`}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center flex-wrap gap-2.5">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              {project.name}
            </h3>
            {project.status === "in-development" && (
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${accentBg[project.accent]} ${accentText[project.accent]}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                In Active Development
              </span>
            )}
          </div>
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
            className={`grid place-items-center w-11 h-11 rounded-full shrink-0 ${accentBg[project.accent]} ${accentText[project.accent]} hover:rotate-45 transition-transform duration-300 focus-visible:outline focus-visible:outline-3 focus-visible:outline-grape-dark`}
          >
            <ArrowUpRight size={20} />
          </a>
        )}
      </div>

      <p className="text-ink/70 mt-4 leading-relaxed max-w-2xl">{project.purpose}</p>

      <ul className="flex flex-wrap gap-2 mt-5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cloud text-ink/70 shadow-clay-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-ink/10">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1.5">
            Problem
          </h4>
          <p className="text-ink/70 text-sm leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1.5">
            Solution
          </h4>
          <p className="text-ink/70 text-sm leading-relaxed">{project.solution}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-1.5">
            Outcome
          </h4>
          <p className="text-ink/70 text-sm leading-relaxed">{project.outcome}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-xs font-bold uppercase tracking-widest text-ink/50 mb-2.5">
          Key Features
        </h4>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
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
    </motion.div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <section
      id="experience"
      className="relative px-6 py-24"
      aria-label="Experience and case studies"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-coral-dark">
            Experience &amp; Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-ink">
            Real projects, real problems solved
          </h2>
          <p className="max-w-xl mx-auto text-ink/60 mt-3">
            From an in-progress platform to shipped client work — pick a
            project below for the problem, the fix, and the result.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <ProjectTabs projects={projects} activeId={activeId} onSelect={setActiveId} />
        </motion.div>

        <AnimatePresence mode="wait">
          <ProjectPanel project={activeProject} key={activeProject.id} />
        </AnimatePresence>
      </div>
    </section>
  );
}