"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import "./styles.module.scss";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSession, signIn, getSession } from "next-auth/react";

function Login() {
  const { data: session } = useSession();
  console.log(session);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      console.log(res);
      if (res.status === 200) {
        toast.success(
          "You have successfully logged in..! You will be redirected to the home page in 7 seconds."
        );
        setTimeout(() => {
          push("/");
        }, 7000);
      }
      if (res.status === 401 && res.error == "Incorrect password!") {
        toast.error("There is an error in the login information..!");
        setError("password", {
          type: "focus",
          message: "Incorrect password!",
        });
      }
      if (res.status === 401 && res.error == "You haven't registered yet!") {
        toast.error("There is an error in the login information..!");
        setError("email", {
          type: "focus",
          message: "You haven't registered yet!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
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
        render={({ message }) => (
          <p className={`${styles.err} ${styles.errUp}`}>{message}</p>
        )}
      />
      <input
        type="password"
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
      <ToastContainer position="bottom-left" />
    </form>
  );
}

export default Login;
