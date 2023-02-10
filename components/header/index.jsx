"use client";

import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";
import "./styles.module.scss";

import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSession, signOut, getSession } from "next-auth/react";

import Marvel from "../../src/assets/marvel";

const inputProps = {
  placeholder: "Search",
  type: "text",
  minLength: "3",
  maxLength: "10",
};

function Header() {
  const { push } = useRouter();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    push(`/result/${data.nameStartsWith}`);
    //reset();
  };

  return (
    <div className={`${styles.header} fluid`}>
      <div className={styles.headerContent}>
        <div onClick={() => push("/")} className={styles.divOne}>
          <Marvel />{" "}
        </div>
        <div className={styles.divTwo}>
          <div className={styles.wrapper}>
            {session?.user ? (
              <AiOutlinePoweroff
                onClick={() => signOut()}
                className={styles.login}
              />
            ) : (
              <Link href="/login">
                <FaUserAlt className={`${styles.login} ${styles.logout}`} />
              </Link>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...inputProps} {...register("nameStartsWith")} />
              <button type="submit" className={styles.btn}>
                <BsSearch className={styles.search} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
