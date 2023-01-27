import React from "react";

import styles from "./styles.module.scss";
import "./styles.module.scss";

import Marvel from "@/src/assets/marvel";

function Loading() {
  return (
    <div className={styles.containerLoading}>
      {" "}
      <Marvel class_="pulse" />{" "}
    </div>
  );
}

export default Loading;
