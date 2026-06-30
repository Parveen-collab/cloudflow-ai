import React from "react";
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

const Heading = ({
  eyebrow,
  title,
  subtitle,
  level = "h2",
  align = "left",
  className = "",
}: HeadingProps) => {
  const TitleTag = level;

  return (
    <header
      className={[
        styles.heading,
        styles[align],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>
          {eyebrow}
        </span>
      )}

      <TitleTag className={styles.title}>
        {title}
      </TitleTag>

      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default Heading;