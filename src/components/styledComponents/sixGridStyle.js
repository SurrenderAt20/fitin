import React from "react";
import styled from 'styled-components';
import { FaPeopleCarry } from "react-icons/fa";
import fitDude from "../../images/fitDude.jpg";
import fitLadyRed from "../../images/fitLadyRed.png";

export const SixGridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -10%;
  z-index: 1;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 22%);
  justify-content: center;
  align-items: center;
`;

export const Cube = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
  height: 330px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 1.5rem;
  color: #b2b2b2;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledIcon = styled(FaPeopleCarry).attrs({
  size: 100
})`
  color: #b2b2b2;
  margin-bottom: 1.5rem;
`;
