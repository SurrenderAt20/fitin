import React from "react";
import { Card } from "../smallComponents/Card";
import "./Services.scss";

interface ServiceProps {
  title: string;
}

export const Services: React.FC<ServiceProps> = ({ title }) => {
  return (
    <div className="servicesContainer">
      <div className="servicesTitle">
        <h2>{title}</h2>
      </div>
      <div className="cardContainer">
        <div className="cardGrid">
          <Card
            bgImageUrl="https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            category="Category"
            heading="Example Card Heading"
          />
          <Card
            bgImageUrl="https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            category="Category"
            heading="Example Card Heading"
          />
          <Card
            bgImageUrl="https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            category="Category"
            heading="Example Card Heading"
          />
          <Card
            bgImageUrl="https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            category="Category"
            heading="Example Card Heading"
          />
        </div>
      </div>
    </div>
  );
};
