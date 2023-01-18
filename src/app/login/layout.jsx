import React from "react";
import Banner from "../../../components/banner/index";

function LoginLayout({ children }) {
  return (
    <div className="login-container">
      <div>{children}</div>
      <Banner />
    </div>
  );
}

export default LoginLayout;
