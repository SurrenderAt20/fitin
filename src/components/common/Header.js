import React from "react";
import { Navigation } from "./Navigation";
import "./Header.css";

export const Header = () => {
  return (
    <div className="container">
      <Navigation />
      <section className="textContainer">
        <div className="title">
          <h2>muscle</h2>
          <h2 className="red"> power</h2>
        </div>
        <div className="subTitle">
          Fitness is not a destination it is a way of life
        </div>
        <div className="btn">Learn More</div>
      </section>
    </div>
  );
};
