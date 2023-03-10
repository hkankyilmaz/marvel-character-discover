import React from "react";
import Link from "next/link";

function M404() {
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
      <h1>We couldn&apos;t find the characters you looking for!</h1>
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

export default M404;
