"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import {
  fadeUp,
  reducedMotionVariants,
  scrollReveal,
  staggerContainer,
  transitions,
  viewport,
} from "@/src/lib/motion";

import styles from "./Heading.module.css";

type HeadingLevel = "h1" | "h2" | "h3";
type HeadingAlign = "left" | "center" | "right";

export interface HeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  level?: HeadingLevel;
  align?: HeadingAlign;
  className?: string;
}

const itemVariants = {
  hidden: fadeUp.hidden,
  visible: {
    ...fadeUp.visible,
    transition: transitions.fade,
  },
};

export default function Heading({
  eyebrow,
  title,
  subtitle,
  level = "h2",
  align = "left",
  className = "",
}: HeadingProps) {
  const reduced = useReducedMotion();
  const reveal = scrollReveal(reduced);
  const TitleTag = level;
  const containerVariants = reduced
    ? reducedMotionVariants
    : staggerContainer;

  return (
    <motion.header
      className={[
        styles.heading,
        styles[align],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      variants={containerVariants}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={viewport}
    >
      {eyebrow && (
        <motion.span
          className={styles.eyebrow}
          variants={itemVariants}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.div variants={itemVariants}>
        <TitleTag className={styles.title}>
          {title}
        </TitleTag>
      </motion.div>

      {subtitle && (
        <motion.p
          className={styles.subtitle}
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
}
