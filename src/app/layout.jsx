import "@/styles/reset.scss";
import "@/styles/global.scss";

import Footer from "@/components/footer/index";
import Header from "@/components/header/index";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
