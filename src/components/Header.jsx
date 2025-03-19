import React from "react";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="bg-white h-20 border border-b-2 border-gray-300 flex justify-center items-center">
      <img src={logo} />
    </div>
  );
};

export default Header;
