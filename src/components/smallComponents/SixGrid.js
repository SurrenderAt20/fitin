import React from "react";
import fitDude from "../../images/fitDude.jpg";
import {
  SixGridContainer,
  GridWrapper,
  Cube,
  Content,
  Title,
  Paragraph,
  Image,
  StyledIcon,
} from "../styledComponents/sixGridStyle";

export const SixGrid = () => {
  return (
    <SixGridContainer>
      <GridWrapper>
        <Cube>
          <Content>
            <StyledIcon />
            <Title>community</Title>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida consequat.</Paragraph>
          </Content>
        </Cube>
        <Cube>
          <Content>
            <Image src={fitDude} alt="Fitness Guy" />
          </Content>
        </Cube>
        <Cube>
          <Content>
            <StyledIcon />
            <Title>community</Title>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida consequat.</Paragraph>
          </Content>
        </Cube>
        <Cube>
          <Content>
            <Image src={fitDude} alt="Fitness Guy" />
          </Content>
        </Cube>
        <Cube>
          <Content>
            <StyledIcon />
            <Title>community</Title>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida consequat.</Paragraph>
          </Content>
        </Cube>
        <Cube>
          <Content>
            <Image src={fitDude} alt="Fitness Guy" />
          </Content>
        </Cube>
      </GridWrapper>
    </SixGridContainer>
  );
};


/* import React from "react";
import "./SixGrid.css";
import fitDude from "../../images/fitDude.jpg";
import fitLadyRed from "../../images/fitLadyRed.png";
import { FaPeopleCarry } from "react-icons/fa";

export const SixGrid = () => {
  return (
    <div className="sixGridContainer">
      <div className="gridWrapperContainer">
        <div className="gridWrapper">
          <div className="cube">
            <div className="content">
              <FaPeopleCarry
                size={100}
                style={{ color: "#b2b2b2", marginBottom: "1.5rem" }}
              />
              <h3>community</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                gravida consequat.
              </p>
            </div>
          </div>
          <div className="cube">
            <div className="content">
              <img src={fitDude} alt="Fitness Guy" />
            </div>
          </div>
          <div className="cube">
            <div className="content">
              <FaPeopleCarry
                size={100}
                style={{ color: "#b2b2b2", marginBottom: "1.5rem" }}
              />
              <h3>community</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                gravida consequat.
              </p>
            </div>
          </div>
          <div className="cube">
            <div className="content">
              <img src={fitDude} alt="Fitness Guy" />
            </div>
          </div>
          <div className="cube">
            <div className="content">
              <FaPeopleCarry
                size={100}
                style={{ color: "#b2b2b2", marginBottom: "1.5rem" }}
              />
              <h3>community</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                gravida consequat.
              </p>
            </div>
          </div>
          <div className="cube">
            <div className="content">
              <img src={fitDude} alt="Fitness Guy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 */
