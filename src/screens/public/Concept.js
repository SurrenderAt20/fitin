import React from "react";
import "./Concept.css";
import { Navigation } from "../../components/common/Navigation";
import { Footer } from "../../components/common/Footer";

export const Concept = () => {
  return (
    <div className="conceptContainer">
      <Navigation />
      <section className="conceptHeader">
        <div className="textManagement">
          <div className="conceptTitle">
            <h2>
              A Way to start your{" "}
              <span className="titleRed">fitness journey </span>
            </h2>
          </div>
          <div className="conceptText">
            <p>
              Getting started is never easy. Here at FIT•IN we do the most to
              make sure you get the aid you need. We help you succeed.
            </p>
          </div>
          <div className="btn">Learn More</div>
        </div>
      </section>
      <section className="conceptInfo">
        <div className="conceptInfoWrapper">
          <div className="conceptInfoTitle">
            <h2>Title</h2>
          </div>
          <div className="conceptInfoGrid">
            <div className="conceptInfoGridItem">
              <div className="conceptInfoGridItemImg">
                <img src="" />
              </div>
              <div className="conceptInfoGridItemTitle"></div>
              <div className="conceptInfoGridItemText"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
