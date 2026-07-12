"use client";

import { useEffect, useState, useRef } from "react";

export default function TypingText({ words, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion.current) {
      setDisplayText(words[0]);
    }
  }, [words]);

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    const currentWord = words[wordIndex % words.length];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseAtEnd = 1400;
    const pauseAtStart = 300;

    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAtEnd);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, pauseAtStart);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span className={className}>
      <span aria-live="polite" aria-atomic="true">
        {displayText}
      </span>
      <span className="inline-block w-[3px] h-[0.9em] bg-grape ml-1 align-middle animate-pulse" aria-hidden="true" />
      {/* Screen-reader-only static list so the rotating text is never lost to a11y tree */}
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
