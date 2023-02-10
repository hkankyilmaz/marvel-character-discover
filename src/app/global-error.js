"use client";
import React from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <head></head>
      <body>
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
      </body>
    </html>
  );
}
