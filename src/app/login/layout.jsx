import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import "./styles.module.scss";

import spiderman from "@/assets/photo/spiderman.jpeg";
import thor from "@/assets/photo/thor.jpg";
import ironman from "@/assets/photo/ironman.jpeg";

function LoginLayout({ children }) {
  console.log(children.props.childProp.segment);
  return (
    <div className={`${styles.LoginLayoutContainer} LoginLayoutContainer`}>
      <div className={styles.loginLayoutChildren}>{children}</div>
      <div className={`${styles.LoginLayoutImg}`}>
        <Image
          priority
          className={styles.img}
          src={
            children.props.childProp.segment == "signup" ? ironman : spiderman
          }
          fill
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginLayout;
