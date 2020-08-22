import React from "react";
import styles from "./styles.module.css";

const Thing = ({ error }) =>
  error ? (
    new Error("Things went boom!")
  ) : (
    <div className={styles.thing}>I'm a lazy component</div>
  );

export default Thing;
