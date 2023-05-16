import React from "react";
import "./Navigation.css";
import logored from "../../images/logored.png";

export const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {" "}
        <img className="logoImg" src={logored} alt="Logo" />
        FITIN
      </div>
      <div className="links">
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
        <a href="/">Link 4</a>
        <a href="/">Link 5</a>
      </div>
    </nav>
  );
};
