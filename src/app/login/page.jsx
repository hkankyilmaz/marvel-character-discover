"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import styles from "./styles.module.scss";
import "./styles.module.scss";
import Link from "next/link";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h1>Login</h1>
      <input
        placeholder="e-mail"
        {...register("email", {
          required: "This is required field",
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Please enter valid e-mail",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <p className={styles.err}>{message}</p>}
      />
      <input
        placeholder="password"
        {...register("password", {
          required: "This is required field",
          minLength: {
            value: 6,
            message: "You Password must have minimum 6 Character",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <p className={styles.err}>{message}</p>}
      />

      <button type="submit" className={styles.formBtn}>
        Send
      </button>
      <p>
        You dont have account yet. <Link href="/login/signup">Sign Up</Link>
      </p>
    </form>
  );
}

export default Login;
