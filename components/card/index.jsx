import React from "react";
import Image from "next/image";

import Link from "next/link";

import styles from "./styles.module.scss";
import "./styles.module.scss";

function Card({ img, id, name }) {
  return (
    <div className={styles.cardContainer}>
      <Link href={`/character/${id}`}>
        {" "}
        <img src={img} />{" "}
      </Link>
      <Link href={`/character/${id}`}>
        <p> {name} </p>
      </Link>
    </div>
  );
}

export default Card;
