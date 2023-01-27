import React from "react";
import axios from "axios";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "./styles.module.scss";
import "./styles.module.scss";
import Card from "@/components/card";
import Header from "@/components/header";

import { load } from "@/services/marvel";
import { fetchCharacter } from "@/services/marvel";

const Home = async () => {
  let offset = Math.floor(Math.random() * 100);

  const res = await load(offset);
  console.log(res.data.data.results);

  return (
    <div className={styles.homeContainer}>
      {res.data.data.results.map((char) => (
        <Card
          name={char.name}
          key={char.id}
          id={char.id}
          img={char.thumbnail.path + "." + char.thumbnail.extension}
        />
      ))}
    </div>
  );
};

export default Home;
