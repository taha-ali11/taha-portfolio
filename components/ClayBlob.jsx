"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

/**
 * Soft puffy blob shape used as ambient background decoration.
 * Animated with anime.js: morphs border-radius and drifts gently.
 * Skips animation entirely when the user prefers reduced motion.
 */
export default function ClayBlob({ className = "", colorClass = "bg-grape/20" }) {
  const blobRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !blobRef.current) return;

    const animation = anime({
      targets: blobRef.current,
      borderRadius: [
        "42% 58% 65% 35% / 45% 40% 60% 55%",
        "60% 40% 30% 70% / 50% 60% 40% 50%",
        "35% 65% 55% 45% / 40% 50% 50% 60%",
        "42% 58% 65% 35% / 45% 40% 60% 55%",
      ],
      translateY: ["0px", "-22px", "10px", "0px"],
      rotate: ["0deg", "8deg", "-6deg", "0deg"],
      duration: 12000,
      easing: "easeInOutSine",
      loop: true,
    });

    return () => animation.pause();
  }, []);

  return (
    <div
      ref={blobRef}
      aria-hidden="true"
      className={`absolute rounded-blob blur-xl ${colorClass} ${className}`}
    />
  );
}
