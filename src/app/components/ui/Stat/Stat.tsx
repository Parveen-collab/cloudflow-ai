import React from "react";
import styles from "./Stat.module.css";

export interface StatProps {
  title: string;
  value: string | number;
  suffix?: string;
  description?: string;
  progress?: number;
  icon?: React.ReactNode;
  className?: string;
}

const Stat = ({
  title,
  value,
  suffix = "",
  description,
  progress,
  icon,
  className = "",
}: StatProps) => {
  return (
    <div className={`${styles.stat} ${className}`}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          {icon && (
            <span className={styles.icon}>
              {icon}
            </span>
          )}

          <span className={styles.title}>
            {title}
          </span>
        </div>

        <span className={styles.value}>
          {value}
          {suffix}
        </span>
      </div>

      {typeof progress === "number" && (
        <div className={styles.progress}>
          <div
            className={styles.fill}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      )}

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Stat;