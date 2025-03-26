import React from "react";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-center items-center">
      <img src={logo} />
    </div>
  );
};

export default Header;
