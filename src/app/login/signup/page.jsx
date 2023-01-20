"use client";

import React from "react";

import Link from "next/link";
import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";
import "./styles.module.scss";

function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h1>Sign Up</h1>
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
        Back the Login <Link href="/login">Here</Link>
      </p>
    </form>
  );
}

export default SingUp;
