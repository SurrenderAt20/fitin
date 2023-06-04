import React from "react";
import "./Landing.css";
import { Header } from "../../components/common/Header";
import { About } from "../../components/common/About";
import { Footer } from "../../components/common/Footer";

export const Landing = () => {
  return (
    <div>
      <Header
        title="muscle"
        titleRed="power"
        subTitle="Fitness is not a destination it is a way of life"
        /* buttonText="Learn More" */
      />
      <About />
      <Footer />
    </div>
  );
};
