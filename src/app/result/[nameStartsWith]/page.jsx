import React from "react";

import styles from "./styles.module.scss";
import "./styles.module.scss";
import Card from "@/components/card";

import { load } from "@/services/marvel";

const Home = async ({ params }) => {
  let offset = 1;

  const res = await load(offset, params.nameStartsWith);

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
