import React from "react";

import Link from "next/link";

import styles from "./styles.module.scss";
import "./styles.module.scss";

function SingUp() {
  return (
    <form className={styles.formContainer}>
      <h1>Sign Up</h1>
      <input />
      <input />
      <p>
        Back the Home Page <Link href="#">Here</Link>{" "}
      </p>
    </form>
  );
}

export default SingUp;
