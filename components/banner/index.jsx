import React from "react";

import Image from "next/image";

import styles from "./styles.module.scss";
import "./styles.module.scss";

import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import thor from "@/assets/photo/thor.jpg";
import spiderman from "@/assets/photo/spiderman.jpeg";
import ironman from "@/assets/photo/ironman.jpeg";

function Banner() {
  var settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image src={thor} fill alt="" />
      </div>
      <div>
        <Image src={spiderman} fill alt="" />
      </div>
      <div>
        <Image src={ironman} fill alt="" />
      </div>
    </Slider>
  );
}

export default Banner;
