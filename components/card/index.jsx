import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import "./styles.module.scss";

function Card({ img, id, name }) {
  return (
    <div className={styles.cardContainer}>
      <img src={img} />
      <p> {name} </p>
    </div>
  );
}

export default Card;
