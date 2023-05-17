import React from "react";
import "./SixGrid.css";

export const SixGrid = () => {
  return (
    <div className="sixGridContainer">
      <div className="gridWrapper">
        <div className="cube">
          <div className="content">
            {/* Content for Cube 1 */}
            <h3>Advertisement 1</h3>
            <img src="image1.jpg" alt="Advertisement 1" />
          </div>
        </div>
        <div className="cube">
          <div className="content">
            {/* Content for Cube 2 */}
            <h3>Advertisement 2</h3>
            <img src="image2.jpg" alt="Advertisement 2" />
          </div>
        </div>
        {/* Repeat for the remaining cubes */}
        <div className="cube">
          <div className="content">
            {/* Content for Cube 2 */}
            <h3>Advertisement 3</h3>
            <img src="image2.jpg" alt="Advertisement 2" />
          </div>
        </div>
        <div className="cube">
          <div className="content">
            {/* Content for Cube 2 */}
            <h3>Advertisement 4</h3>
            <img src="image2.jpg" alt="Advertisement 2" />
          </div>
        </div>
        <div className="cube">
          <div className="content">
            {/* Content for Cube 2 */}
            <h3>Advertisement 5</h3>
            <img src="image2.jpg" alt="Advertisement 2" />
          </div>
        </div>
        <div className="cube">
          <div className="content">
            {/* Content for Cube 2 */}
            <h3>Advertisement 6</h3>
            <img src="image2.jpg" alt="Advertisement 2" />
          </div>
        </div>
      </div>
    </div>
  );
};
