"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Claymorphic custom cursor: a precise dot plus a trailing puffy ring.
 * Grows and glows over interactive elements, presses down on click —
 * same "gummy pop" feel as the site's 3D buttons.
 *
 * Only activates on fine-pointer (mouse) devices and never overrides
 * a person's prefers-reduced-motion setting. Falls back to the normal
 * system cursor everywhere else (touch devices, trackpads set to
 * reduced motion, etc.).
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot: tight, near-instant follow
  const dotX = useSpring(cursorX, { stiffness: 500, damping: 30, mass: 0.2 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 30, mass: 0.2 });
  // Ring: softer spring lag, gives the puffy "trailing" feel
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 22, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 22, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const handleMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleOver = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };
    const handleOut = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };
    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing puffy ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full border-2 border-grape-dark/50"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 58 : 34,
          height: isHovering ? 58 : 34,
          scale: isPressed ? 0.82 : 1,
          backgroundColor: isHovering
            ? "rgba(140,111,230,0.20)"
            : "rgba(140,111,230,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Precise dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-grape"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isPressed ? 6 : 9,
          height: isPressed ? 6 : 9,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </>
  );
}
