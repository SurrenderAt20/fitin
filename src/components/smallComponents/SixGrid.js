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
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              gravida consequat.
            </Paragraph>
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
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              gravida consequat.
            </Paragraph>
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
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              gravida consequat.
            </Paragraph>
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
