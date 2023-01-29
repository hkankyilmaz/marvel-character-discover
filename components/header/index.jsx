import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";
import "./styles.module.scss";

import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import Marvel from "../../src/assets/marvel";

const inputProps = {
  placeholder: "Search",
  type: "text",
  minLength: "3",
  maxLength: "10",
};

function Header() {
  return (
    <div className={`${styles.header} fluid`}>
      <div className={styles.headerContent}>
        <div className={styles.divOne}>
          <Marvel />{" "}
        </div>
        <div className={styles.divTwo}>
          <div className={styles.wrapper}>
            <Link href="/login">
              <FaUserAlt className={styles.login} />
            </Link>
            <input {...inputProps} />
            <BsSearch className={styles.search} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
