"use client";

import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";
import "./styles.module.scss";

import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useRouter } from "next/navigation";
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
  console.log(session);
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

            <input {...inputProps} />
            <BsSearch className={styles.search} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
