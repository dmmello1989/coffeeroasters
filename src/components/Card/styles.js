import styled from "styled-components";
import * as bean from "../../styles/bean";

export const Card = styled.div`
  width: 228px;
  height: 250px;
  flex-shrink: 0;
  padding: 32px 28px;
  font: 400 1rem Barlow;
  line-height: 1.625rem;
  transition: all 0.3s ease;
  color: ${bean.colorCT};
  
  > strong {
    display: block;
    margin-bottom: 24px;
    line-height: 2rem;
    color: ${bean.colorCT};
    font: 900 1.5rem Fraunces;
  }

  &:hover {
    background-color: ${bean.colorPO};
  }
  
  ${props => props.isActive && `
    color: ${bean.colorLC};
    background-color: ${bean.colorDC};
  `};
`;