"use client";

import React from "react";

import { useForm } from "react-hook-form";

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
        type="email"
        {...register(
          "email",
          { required: true },
          {
            minLength: {
              value: 1,
              message: "You Password have to minimum 6 Character",
            },
          }
        )}
      />
      <input
        placeholder="password"
        {...register("password", { required: true })}
      />
      <p>
        You dont have account yet. <Link href="/login/signup">Sign Up</Link>
      </p>
    </form>
  );
}

export default Login;
