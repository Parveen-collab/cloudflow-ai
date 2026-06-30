"use client";

import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import { hoverLift, hoverTap } from "@/src/lib/motion";

export interface HoverLiftProps
  extends HTMLMotionProps<"div"> {
  disabled?: boolean;
}

export default function HoverLift({
  children,
  disabled = false,
  className,
  ...props
}: HoverLiftProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={
        reduced || disabled ? undefined : hoverLift
      }
      whileTap={
        reduced || disabled ? undefined : hoverTap
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
