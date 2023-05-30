import React from "react";
import { Navigation } from "./Navigation";
import "./Header.css";

interface HeaderProps {
  title: string;
  titleRed?: string;
  subTitle: string;
  buttonText: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  buttonText,
}) => {
  return (
    <div className="container">
      <Navigation />
      <section className="textContainer">
        <div className="title">
          <h2>{title}</h2>
          <h2 className="red">{title}</h2>
        </div>
        <div className="subTitle">{subTitle}</div>
        <div className="btn">Learn More</div>
      </section>
      <Button text={buttonText} />
    </div>
  );
};

interface ButtonProps {
  text?: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return <div className="btn">{text}</div>;
};
