import React from "react";
import { Button } from "./LPHeader";
import "./Header.scss";

interface HeaderProps {
  headerTitle: string;
  headerTitleRed?: string;
  headerSubTitle: string;
}

export const Header: React.FC<HeaderProps> = ({
  headerTitle = "",
  headerTitleRed = "",
  headerSubTitle = "",
}) => {
  return (
    <div className="conceptHeaderContainer">
      <section className="headerTextContainer">
        <div className="headerTitle">
          <h2 className="">{headerTitle}&nbsp;</h2>
          <h2 className="headerTitleRed">{headerTitleRed}</h2>
        </div>
        <div className="headerSubTitle">
          <p>{headerSubTitle}</p>
        </div>
        <div className="headerBtnContainer">
          <Button variant="light" text="Learn More" />
        </div>
      </section>
    </div>
  );
};
