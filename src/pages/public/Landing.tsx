import React from "react";
import "./Landing.css";
import { LPHeader } from "../../components/common/LPHeader";
import { About } from "../../components/common/About";
import { Footer } from "../../components/common/Footer";

export const Landing = () => {
  return (
    <div>
      <LPHeader
        title="muscle"
        titleRed="power"
        subTitle="Fitness is not a destination it is a way of life"
      />
      <About
        aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
      gravida consequat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nunc gravida consequat. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Nunc gravida consequat. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
      consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nunc gravida consequat. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Nunc gravida consequat."
      />
      <Footer />
    </div>
  );
};
