import React from "react";
import "./About.scss";
import { SixGrid } from "../smallComponents/SixGrid";
import logored1 from "../../images/logored1.png";

interface AboutProps {
  includeSixGrid?: boolean;
}

export const About = ({ includeSixGrid = true }) => {
  return (
    <div className="containerAbout">
      {includeSixGrid && <SixGrid />}
      <div className="contentContainer">
        <div className="contentWrapper">
          <div className="contentItem">
            <img src={logored1} />
            <h3>membership offer of the year</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              gravida consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc gravida consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc gravida consequat. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nunc gravida consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc gravida consequat.
            </p>
            <div className="btnAbout">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};
