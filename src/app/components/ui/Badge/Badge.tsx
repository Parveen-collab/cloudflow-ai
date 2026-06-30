import React from "react";
import styles from "./Badge.module.css";

export type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "outline";

export type BadgeSize =
  | "sm"
  | "md";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  children: React.ReactNode;
}

const Badge = ({
  variant = "primary",
  size = "md",
  rounded = true,
  className = "",
  children,
  ...props
}: BadgeProps) => {
  const classes = [
    styles.badge,
    styles[variant],
    styles[size],
    rounded ? styles.rounded : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;