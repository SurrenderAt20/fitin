import React from "react";
import { Navigation } from "./Navigation";
import "./LPHeader.scss";

interface LPHeaderProps {
  title: string;
  titleRed?: string;
  subTitle: string;
  buttonText?: string;
}

export const LPHeader: React.FC<LPHeaderProps> = ({
  title,
  titleRed = "",
  subTitle,
  buttonText = "",
}) => {
  return (
    <div className="container">
      <Navigation />
      <section className="textContainer">
        <div className="title">
          <h2>{title}&nbsp;</h2>
          <h2 className="red">{titleRed}</h2>
        </div>
        <div className="subTitle">{subTitle}</div>
        <Button text="Learn More" variant="light" />
      </section>
    </div>
  );
};

interface ButtonProps {
  text: string;
  variant: "light" | "dark";
}

export const Button: React.FC<ButtonProps> = ({ variant, text }) => (
  <div className={`btn ${variant}`}>{text}</div>
);
