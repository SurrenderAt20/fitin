import React from "react";
import "./Concept.css";
import { Navigation } from "../../components/common/Navigation";
import { Footer } from "../../components/common/Footer";

export const Concept = () => {
  return (
    <div className="conceptContainer">
      <Navigation />
      <div className="conceptHeader">
        <div className="textManagement">
          <div className="conceptTitle">
            <h2>title</h2>
          </div>
          <div className="conceptText">
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
