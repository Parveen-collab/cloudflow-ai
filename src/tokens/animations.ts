export const animations = {
  duration: {
    fast: 0.15,
    normal: 0.35,
    slow: 0.6,
    line: 1,
    counter: 1.5,
  },

  ease: {
    out: [0.22, 1, 0.36, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
  },

  spring: {
    stiffness: 260,
    damping: 24,
  },

  stagger: {
    children: 0.12,
    item: 0.15,
  },
} as const;
