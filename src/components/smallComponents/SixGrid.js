import React from "react";
import "./SixGrid.css";
import fitDude from "../../images/fitDude.jpg";
import fitLadyRed from "../../images/fitLadyRed.png";
import { FaPeopleCarry } from "react-icons/fa";

export const SixGrid = () => {
  return (
    <div className="sixGridContainer">
      <div className="gridWrapper">
        <div className="cube">
          <div className="content">
            <FaPeopleCarry
              size={100}
              style={{ color: "#b2b2b2", marginBottom: "1.5rem" }}
            />
            <h3>community</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              gravida consequat.
            </p>
          </div>
        </div>
        <div className="cube">
          <div className="content">
            <img src={fitDude} alt="Fitness Guy" />
          </div>
        </div>
        <div className="cube">
          <div className="content">
            <FaPeopleCarry
              size={100}
              style={{ color: "#b2b2b2", marginBottom: "1.5rem" }}
            />
            <h3>community</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              gravida consequat.
            </p>
          </div>
        </div>
        <div className="cube">
          <div className="content">
            <img src={fitDude} alt="Fitness Guy" />
          </div>
        </div>
        <div className="cube">
          <div className="content">
            <FaPeopleCarry
              size={100}
              style={{ color: "#b2b2b2", marginBottom: "1.5rem" }}
            />
            <h3>community</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              gravida consequat.
            </p>
          </div>
        </div>
        <div className="cube">
          <div className="content">
            <img src={fitDude} alt="Fitness Guy" />
          </div>
        </div>
      </div>
    </div>
  );
};
