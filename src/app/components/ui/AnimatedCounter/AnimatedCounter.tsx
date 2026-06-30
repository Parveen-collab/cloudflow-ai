"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useReducedMotion } from "@/src/hooks/useReducedMotion";
import { transitions, viewport } from "@/src/lib/motion";

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({
  value,
  duration = transitions.counter.duration,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, viewport);
  const count = useMotionValue(reduced ? value : 0);
  const hasAnimated = useRef(false);

  const rounded = useTransform(count, (latest) =>
    latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (reduced) {
      count.set(value);
      return;
    }

    if (!isInView || hasAnimated.current) {
      return;
    }

    hasAnimated.current = true;

    const controls = animate(count, value, {
      duration,
      ease: transitions.counter.ease,
    });

    return controls.stop;
  }, [count, duration, isInView, reduced, value]);

  const formattedValue = `${prefix}${value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  return (
    <motion.span
      ref={ref}
      aria-label={formattedValue}
    >
      <span aria-hidden="true">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
    </motion.span>
  );
};

export default AnimatedCounter;
