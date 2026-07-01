"use client";

import { motion } from "framer-motion";
import {
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import {
  fadeUp,
  reducedMotionVariants,
  scrollReveal,
  staggerContainer,
  transitions,
  viewport,
} from "@/src/lib/motion";

export interface StaggerRevealProps
  extends HTMLMotionProps<"ul"> {
  itemVariant?: Variants;
}

export default function StaggerReveal({
  children,
  className,
  itemVariant,
  ...props
}: StaggerRevealProps) {
  const reduced = useReducedMotion();
  const reveal = scrollReveal(reduced);

  return (
    <motion.ul
      className={className}
      variants={reduced ? reducedMotionVariants : staggerContainer}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={viewport}
      transition={transitions.fade}
      {...props}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
  ...props
}: HTMLMotionProps<"li"> & { variants?: Variants }) {
  const reduced = useReducedMotion();

  return (
    <motion.li
      className={className}
      variants={reduced ? reducedMotionVariants : variants}
      {...props}
    >
      {children}
    </motion.li>
  );
}
