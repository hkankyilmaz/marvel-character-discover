"use client";
import React from "react";
import axios from "axios";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "./styles.module.scss";
import "./styles.module.scss";

import { load } from "@/services/marvel";
import { fetchCharacter } from "@/services/marvel";

export default function Home() {
  const [character, setCharacter] = React.useState([]);
  let offset = Math.floor(Math.random() * 100);
  console.log(character);

  React.useEffect(() => {
    load(offset)
      .then((res) => setCharacter(res.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.homeContainer}>
      {character.map((item) => (
        <div>amk</div>
      ))}
    </div>
  );
}
