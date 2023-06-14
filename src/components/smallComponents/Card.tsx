import React from "react";
import "./Card.scss";

interface CardProps {
  bgImageUrl: string;
  category?: string;
  heading: string;
  link?: string;
}

export const Card: React.FC<CardProps> = ({
  bgImageUrl,
  category,
  heading,
  link,
}) => {
  return (
    <a className="card" href={link}>
      <div
        className="cardBackground"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      ></div>
      <div className="cardContent">
        <p className="cardCategory">{category}</p>
        <h3 className="cardHeading">{heading}</h3>
      </div>
    </a>
  );
};
