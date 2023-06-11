import React from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  text: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, text, image }) => {
  return (
    <div className="card">
      <div className="pic" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="ttl">
        <h2 className="h2">{title}</h2>
        <p className="subtitle">{text}</p>
        <a href="#" className="btn">
          More
        </a>
      </div>
    </div>
  );
};
