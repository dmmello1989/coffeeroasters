import styled from "styled-components";
import { Link } from "react-router-dom";
import * as bean from "../../styles/bean";

export const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  min-height: ${props => props.bgSize ? props.bgSize : "450px"};
  height: auto;
  padding: 100px 85px;
  margin: 0 auto;
  border-radius: 8px;
  background: url(${props => props.bgImg}) center/cover no-repeat;
  
  @media (max-width: 767px) {
    background: url(${props => props.bgImg}) center/cover no-repeat;
  }
`;

export const Title = styled.h1`
  margin: 0 0 32px;
  color: ${bean.colorLC};
  font-weight: 900;
  font-family: Fraunces;
  line-height: 4.5rem;
  font-size: ${({titleSize}) => titleSize ? titleSize : "1rem"};
`;

export const Text = styled.p`
  width: ${({ textWidth }) => textWidth ? textWidth : "auto"};
  color: ${bean.colorLC};
  font: 400 1rem Barlow;
  line-height: 1.625rem;
`;