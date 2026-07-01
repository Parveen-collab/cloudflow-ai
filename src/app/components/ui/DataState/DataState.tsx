"use client";

import type { ReactNode } from "react";

import styles from "./DataState.module.css";

export interface DataStateProps {
  isLoading: boolean;
  isError: boolean;
  loadingLabel?: string;
  errorLabel?: string;
  children: ReactNode;
}

export default function DataState({
  isLoading,
  isError,
  loadingLabel = "Loading data…",
  errorLabel = "Unable to load data. Please refresh the page.",
  children,
}: DataStateProps) {
  if (isLoading) {
    return (
      <div
        className={styles.state}
        role="status"
        aria-live="polite"
        aria-busy="true"
        data-state="loading"
      >
        <div className={styles.skeletonGroup} aria-hidden="true">
          <span className={styles.skeleton} />
          <span className={`${styles.skeleton} ${styles.skeletonShort}`} />
        </div>
        <p className={styles.label}>{loadingLabel}</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={styles.state}
        role="alert"
        data-state="error"
      >
        <p className={styles.error}>{errorLabel}</p>
      </div>
    );
  }

  return children;
}
