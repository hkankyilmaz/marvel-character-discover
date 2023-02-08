import React from "react";

import styles from "./styles.module.scss";
import "./styles.module.scss";

async function index({ character, comics }) {
  return (
    <main className={styles.base}>
      <div className={`container_ ${styles.container}`}>
        <div className={styles.card}>
          <div>
            <img
              className={`${styles.imgWrapper}`}
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
            />
          </div>
          <div className={styles.description}>
            <h1>{character.name}</h1>
            <p>
              {!!character.description
                ? character.description
                : "Character's description doesn't exist."}
            </p>
          </div>
        </div>
        <h2 className={styles.comicsTitle}>Comics</h2>
        <div className={styles.comics}>
          {comics?.map((comic) => {
            return (
              <div key={comic.id} className={styles.cardwrapper}>
                <div className={styles.cardimg}>
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  />
                </div>
                <div className={styles.cardtitle}>
                  <p>{comic.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default index;
