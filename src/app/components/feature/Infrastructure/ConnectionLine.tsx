"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import {
  lineDraw,
  reducedMotionVariants,
  scrollReveal,
  transitions,
  viewport,
} from "@/src/lib/motion";

const LINE_POSITIONS = [80, 150, 230, 310] as const;

export interface ConnectionLineProps {
  className?: string;
}

export default function ConnectionLine({
  className,
}: ConnectionLineProps) {
  const reduced = useReducedMotion();
  const reveal = scrollReveal(reduced);
  const variants = reduced
    ? reducedMotionVariants
    : lineDraw;

  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {LINE_POSITIONS.map((y, index) => (
        <motion.line
          key={y}
          x1="170"
          y1={y}
          x2="400"
          y2="200"
          variants={variants}
          initial={reveal.initial}
          whileInView={reveal.whileInView}
          viewport={viewport}
          transition={{
            ...transitions.line,
            delay: index * 0.15,
          }}
          style={{
            stroke: "var(--color-primary)",
            strokeWidth: 2,
            strokeDasharray: "10 8",
            fill: "none",
          }}
        />
      ))}
    </svg>
  );
}
