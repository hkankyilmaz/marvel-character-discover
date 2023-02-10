"use client";

import "@/styles/reset.scss";
import "@/styles/global.scss";

import Footer from "@/components/footer/index";
import Header from "@/components/header/index";

import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="container">
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
