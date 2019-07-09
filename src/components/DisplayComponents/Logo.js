import React from "react";
import logoStyles from "../DisplayComponents/logo.module.css"

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  return (
    <div className={logoStyles.logoContainer}>
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
