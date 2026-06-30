"use client";

import { motion } from "framer-motion";

export default function ConnectionLine() {
  return (
    <svg
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      {[80, 150, 230, 310].map((y, index) => (
        <motion.line
          key={index}
          x1="170"
          y1={y}
          x2="400"
          y2="200"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 1,
            delay: index * 0.2,
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