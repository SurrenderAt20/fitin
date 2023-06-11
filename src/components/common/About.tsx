import React from "react";
import { SixGrid } from "../smallComponents/SixGrid";
import { Button } from "./LPHeader";
import "./About.scss";
import logored1 from "../../images/logored1.png";

interface AboutProps {
  includeSixGrid?: boolean;
  aboutTitle: string;
  aboutText: string;
}

export const About: React.FC<AboutProps> = ({
  includeSixGrid = true,
  aboutTitle,
  aboutText,
}) => {
  return (
    <div className="containerAbout">
      {includeSixGrid && <SixGrid />}
      <div className="contentContainer">
        <div className="contentWrapper">
          <div className="contentItem">
            <img src={logored1} />
            <h3>{aboutTitle}</h3>
            <p> {aboutText}</p>
            <Button variant="dark" text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};
