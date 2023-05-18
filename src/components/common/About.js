import React from "react";
import "./About.css";
import { SixGrid } from "../smallComponents/SixGrid";
import fitpng from "../../images/fitpng.png";

export const About = () => {
  return (
    <div className="containerAbout">
      <SixGrid />
      <div className="contentContainer">
        <div className="contentWrapper">
          {/*           <div className="contentCube">
            <div className="contentItem">
              <img src={fitpng} />
            </div>
          </div> */}
          <div className="contentCube">
            <div className="contentItem">
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
    </div>
  );
};
