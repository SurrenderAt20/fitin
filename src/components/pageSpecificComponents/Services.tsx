import React from "react";
import { Card } from "../smallComponents/Card";
import "./Services.scss";

interface ServiceProps {
  title: string;
}

export const Services: React.FC<ServiceProps> = ({ title }) => {
  return (
    <div>
      <div className="servicesContainer">
        <div className="servicesTitle">
          <h2>{title}</h2>
        </div>
        <div className="cards">
          <Card
            title="Test"
            text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            image="https://byjaris.com/code/img-small/12.jpg"
          />
          <Card
            title="Test"
            text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            image="https://byjaris.com/code/img-small/13.jpg"
          />
          <Card
            title="Test"
            text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            image="https://byjaris.com/code/img-small/14.jpg"
          />
        </div>
      </div>
    </div>
  );
};
