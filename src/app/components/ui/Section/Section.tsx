import React from "react";
import styles from "./Section.module.css";

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({
  id,
  children,
  className = "",
  ...props
}: SectionProps) => {
  const classes = [styles.section, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={classes}
      {...props}
    >
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
};

export default Section;