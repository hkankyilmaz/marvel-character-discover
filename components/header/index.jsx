import React from "react";

import styles from "./styles.module.scss";
import "./styles.module.scss";

function Header() {
  return (
    <div className={`${styles.header} fluid`}>
      <div className={styles.headerContent}>
        <div className={styles.divOne}>aa</div>
        <div className={styles.divTwo}>aa</div>
      </div>
    </div>
  );
}

export default Header;
