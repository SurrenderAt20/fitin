import React from "react";
import { useState } from "react";
import logored from "../../images/logored.png";
import { AiOutlineMenu } from "react-icons/ai";
import NavigationOpen from "./NavigationOpen";
import "./Navigation.scss";

export const Navigation = () => {
  const [isOpenNavOpen, setOpenNav] = useState(false);

  const navHandler = () => {
    setOpenNav(!isOpenNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {" "}
        <img className="logoImg" src={logored} alt="Logo" />
        FITIN
      </div>
      <div className="links">
        <a onClick={navHandler}>
          <AiOutlineMenu size={30} />
        </a>
      </div>

      {isOpenNavOpen && (
        <NavigationOpen isOpen={isOpenNavOpen} onChange={setOpenNav} />
      )}
    </nav>
  );
};
