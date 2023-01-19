import React from "react";

import styles from "./styles.module.scss";
import "./styles.module.scss";
import Link from "next/link";

function Login() {
  return (
    <form className={styles.formContainer}>
      <h1>Login</h1>
      <input />
      <input />
      <p>
        You dont have account yet. <Link href="#">Sign Up</Link>{" "}
      </p>
    </form>
  );
}

export default Login;
