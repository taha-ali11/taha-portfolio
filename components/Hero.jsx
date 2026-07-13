"use client";

import { motion } from "framer-motion";
import TypingText from "./TypingText";
import ClayBlob from "./ClayBlob";
import { specializations } from "@/lib/data";

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-32 pb-20"
      aria-label="Introduction"
    >
      <ClayBlob
        className="w-72 h-72 sm:w-96 sm:h-96 -top-10 -left-16 animate-float"
        colorClass="bg-grape/25"
      />
      <ClayBlob
        className="w-56 h-56 sm:w-80 sm:h-80 bottom-0 -right-10"
        colorClass="bg-teal/25"
      />
      <ClayBlob
        className="w-40 h-40 top-1/3 right-1/4 hidden lg:block"
        colorClass="bg-sunny/30"
      />
      <ClayBlob
        className="w-32 h-32 bottom-1/4 left-1/4 hidden lg:block"
        colorClass="bg-clayGreen/25"
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-clay bg-mint-deep px-5 py-2 text-sm font-semibold text-emerald shadow-clay-mint"
        >
          Based in Lahore, Pakistan
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-ink"
        >
          Hey, I&apos;m Taha Ali —
          <br />
          <span className="text-gradient">Design that moves before the user clicks.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="clay-surface px-6 py-3 text-lg sm:text-xl font-display font-semibold text-grape-dark shadow-clay-sm min-h-[3.2rem] flex items-center"
        >
          <TypingText words={specializations} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-xl text-base sm:text-lg text-ink/70"
        >
          I&apos;m a freelance developer and entrepreneur — I build full-stack Next.js products, then wire in animation and AI automation that make them feel crafted, not assembled. Every detail intentional. Nothing left to chance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-5 mt-2"
        >
          <a
            href="#connect"
            onClick={scrollTo("#connect")}
            className="px-7 py-3.5 rounded-full border-2 border-grape-dark/70 bg-grape text-white font-semibold shadow-[0_8px_0_0_#6C4FD6,0_18px_30px_-10px_rgba(108,79,214,0.55)] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#6C4FD6,0_22px_34px_-10px_rgba(108,79,214,0.6)] active:translate-y-1 active:shadow-[0_4px_0_0_#6C4FD6,0_10px_18px_-8px_rgba(108,79,214,0.5)] transition-all duration-300"
          >
            Let&apos;s Ship
          </a>
          <a
            href="#skills"
            onClick={scrollTo("#skills")}
            className="px-7 py-3.5 rounded-full border-2 border-clayGreen-dark/70 bg-clayGreen text-white font-semibold shadow-[0_8px_0_0_#1FAE7E,0_18px_30px_-10px_rgba(31,174,126,0.55)] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#1FAE7E,0_22px_34px_-10px_rgba(31,174,126,0.6)] active:translate-y-1 active:shadow-[0_4px_0_0_#1FAE7E,0_10px_18px_-8px_rgba(31,174,126,0.5)] transition-all duration-300"
          >
            See My Skills
          </a>
        </motion.div>
      </div>
    </section>
  );
}
