"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "./styles.module.scss";
import "./styles.module.scss";

import { loadMore } from "@/services/marvel";
import { fetchCharacter } from "@/services/marvel";

export default function Home() {
  console.log(process.env.MARVEL_PUBLIC_KEY);
  loadMore();
  return (
    <div className={styles.homeContainer}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
