import React from "react";
import { Navigation } from "../../components/common/Navigation";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import "./Concept.scss";

export const Concept = () => {
  return (
    <div>
      <Navigation />
      <Header
        headerTitle="A Way to start your "
        headerTitleRed="fitness journey"
        headerSubTitle="Getting started is never easy. Let's build together"
      />
      <div className="conceptHeaderStyle">
        <div className="conceptTitle"></div>
      </div>
      <Footer />
    </div>
  );
};
