import type { Transition, Variants } from "framer-motion";

import { animations } from "@/src/tokens/animations";

export const viewport = {
  once: true,
  amount: 0.25,
  margin: "-40px 0px",
} as const;

export const transitions = {
  fade: {
    duration: animations.duration.normal,
    ease: animations.ease.out,
  } satisfies Transition,

  slow: {
    duration: animations.duration.slow,
    ease: animations.ease.out,
  } satisfies Transition,

  spring: {
    type: "spring",
    stiffness: animations.spring.stiffness,
    damping: animations.spring.damping,
  } satisfies Transition,

  line: {
    duration: animations.duration.line,
    ease: animations.ease.inOut,
  } satisfies Transition,

  counter: {
    duration: animations.duration.counter,
    ease: animations.ease.out,
  } satisfies Transition,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animations.stagger.children,
      delayChildren: 0.05,
    },
  },
};

export const lineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: transitions.line,
  },
};

export const hoverLift = {
  y: -4,
  scale: 1.02,
  transition: transitions.spring,
} as const;

export const hoverTap = {
  scale: 0.98,
  transition: { duration: animations.duration.fast },
} as const;

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function scrollReveal(
  reduced: boolean,
  delay = 0,
): {
  initial: string | false;
  whileInView: string | undefined;
  viewport: typeof viewport;
  transition: Transition;
} {
  if (reduced) {
    return {
      initial: false,
      whileInView: undefined,
      viewport,
      transition: { duration: 0 },
    };
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport,
    transition: { ...transitions.fade, delay },
  };
}
