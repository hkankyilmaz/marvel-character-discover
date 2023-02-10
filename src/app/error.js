"use client";
import React from "react";
import Link from "next/link";

function Movie404() {
  return (
    <div
      style={{
        color: "white",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>An error has occurred. Sorry for that! </h1>
      <Link
        href="/"
        style={{
          color: "white",
          textDecoration: "underline",
          fontSize: 20,
          marginTop: 8,
        }}
      >
        Go home
      </Link>
    </div>
  );
}

export default Movie404;
