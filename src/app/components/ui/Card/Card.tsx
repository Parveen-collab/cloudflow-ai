import React from "react";
import styles from "./Card.module.css";

export type CardVariant = "default" | "elevated" | "outline" | "glass";
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  hover?: boolean;
  children: React.ReactNode;
}

const Card = ({
  variant = "default",
  padding = "md",
  hover = false,
  className = "",
  children,
  ...props
}: CardProps) => {
  const classes = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    hover ? styles.hover : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;