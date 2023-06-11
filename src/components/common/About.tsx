import React from "react";
import "./About.scss";
import { SixGrid } from "../smallComponents/SixGrid";
import logored1 from "../../images/logored1.png";

interface AboutProps {
  includeSixGrid?: boolean;
  aboutText: string;
}

export const About: React.FC<AboutProps> = ({
  includeSixGrid = true,
  aboutText,
}) => {
  return (
    <div className="containerAbout">
      {includeSixGrid && <SixGrid />}
      <div className="contentContainer">
        <div className="contentWrapper">
          <div className="contentItem">
            <img src={logored1} />
            <h3>membership offer of the year</h3>
            <p> {aboutText}</p>
            <div className="btnAbout">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};
