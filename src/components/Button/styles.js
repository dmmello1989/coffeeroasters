import styled from "styled-components";
import * as bean from "../../styles/bean";

export const Button = styled.button`
  display: block;
  width: 217px;
  height: 56px;
  margin: ${({ margin }) => margin ? margin : 0};
  padding: 15px 16px 16px;
  font: 900 1.125rem Fraunces;
  color: ${bean.colorLC};
  border-radius: 6px;
  text-align: center;
  transition: all 0.3s ease;
  background-color: ${bean.colorDC};

  &:hover {
    background-color: ${bean.colorDCHover};
  }

  &:disabled {
    background-color: ${bean.colorDisabled};
  }
`;