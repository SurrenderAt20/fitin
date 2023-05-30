import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="wrapperFooter">
        <div className="itemSectionOne">
          <AiFillFacebook className="iconFooter" color="#fff" size={30} />
          <AiFillInstagram className="iconFooter" color="#fff" size={30} />
          <AiFillLinkedin className="iconFooter" color="#fff" size={30} />
          <AiFillTwitterSquare className="iconFooter" color="#fff" size={30} />
        </div>
        <div className="borderFooter"></div>
        <div className="itemSectionTwo">
          <p className="linkFooter">Home</p>
          <p className="linkFooter">Careers</p>
          <p className="linkFooter">Contact</p>
          <p className="linkFooter">TOS</p>
        </div>
      </div>
    </div>
  );
};
