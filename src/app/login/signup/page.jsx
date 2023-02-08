"use client";

import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import styles from "./styles.module.scss";
import "./styles.module.scss";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    try {
      axios
        .post("http://localhost:3000/api/users/register", data)
        .catch((err) => {
          console.log(err);
          toast.error("There ise a Problem with your information...");
          setError("email", {
            type: "focus",
            message: "User already exists",
          });
        })
        .then((res) => {
          if (res?.status === 200) {
            console.log(res);
            setTimeout(() => {
              router.push("/login");
            }, 7000);

            toast.success("User Created Succesfully, Please Login...");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.formContainer}
    >
      <h1>Sign Up</h1>
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
        placeholder="password"
        {...register("password", {
          required: "This is required field",
          minLength: {
            value: 6,
            message: "You Password have to minimum 6 Character",
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
        Back the Login <Link href="/login">Here</Link>
      </p>
      <ToastContainer position="bottom-left" />
    </form>
  );
}

export default SingUp;
