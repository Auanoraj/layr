import styles from "./spinner-loader.module.css";
import React from "react";

export const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
};
