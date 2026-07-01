"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import {
  fadeDown,
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  reducedMotionVariants,
  scrollReveal,
  transitions,
  viewport,
} from "@/src/lib/motion";

type ScrollDirection = "up" | "down" | "left" | "right" | "none";

const directionVariants: Record<ScrollDirection, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  none: fadeIn,
};

export interface ScrollRevealProps
  extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: ScrollDirection;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
  ...props
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const reveal = scrollReveal(reduced, delay);
  const variants = reduced
    ? reducedMotionVariants
    : directionVariants[direction];

  return (
    <motion.div
      className={className}
      style={{ minInlineSize: 0, ...style }}
      variants={variants}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={viewport}
      transition={{
        ...transitions.fade,
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
