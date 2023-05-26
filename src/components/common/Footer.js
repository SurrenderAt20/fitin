import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="wrapper">
        <div className="row">
          <div className="column">
            <a className="link" href="#">
              Link 1
            </a>
            <a className="link" href="#">
              Link 2
            </a>
          </div>
          <div className="column">
            <p className="title">Title</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              gravida consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
