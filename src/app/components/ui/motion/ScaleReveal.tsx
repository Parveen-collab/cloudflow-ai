"use client";

import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import {
  reducedMotionVariants,
  scaleIn,
  scrollReveal,
  transitions,
  viewport,
} from "@/src/lib/motion";

export interface ScaleRevealProps
  extends HTMLMotionProps<"div"> {
  delay?: number;
}

export default function ScaleReveal({
  children,
  delay = 0,
  className,
  ...props
}: ScaleRevealProps) {
  const reduced = useReducedMotion();
  const reveal = scrollReveal(reduced, delay);

  return (
    <motion.div
      className={className}
      variants={reduced ? reducedMotionVariants : scaleIn}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={viewport}
      transition={{
        ...transitions.slow,
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
