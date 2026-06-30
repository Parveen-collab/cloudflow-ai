import React from "react";
import styles from "./Stat.module.css";

export interface StatProps {
  title: string;
  value: React.ReactNode;
  description?: string;
  progress?: number;
  icon?: React.ReactNode;
  className?: string;
}

const Stat = ({
  title,
  value,
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

        <div className={styles.value}>
          {value}
        </div>
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