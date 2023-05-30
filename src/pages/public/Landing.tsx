import React from "react";
import "./Landing.css";
import { Header } from "../../components/common/Header";
import { About } from "../../components/common/About";
import { Footer } from "../../components/common/Footer";

export const Landing = () => {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
};
