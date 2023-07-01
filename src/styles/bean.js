import styled from "styled-components";

// This is Bean, the design system for Coffeeroasters.

// Colors 
export const colorDC = "hsl(179, 81%, 29%)";
export const colorDCHover = "hsl(179, 55%, 61%)";
export const colorG = "hsl(215, 5%, 54%)";
export const colorDKB = "hsl(231, 11%, 63%)";
export const colorPO = "hsl(25, 94%, 86%)";
export const colorLC = "hsl(43, 78%, 98%)";
export const colorCT = "hsl(216, 20%, 25%)"
export const colorDisabled = "hsl(25, 11%, 87%)";

// Typography
export const BigTitle = styled.div`
  font: 900 9.375rem Fraunces;
  line-height: 4.5rem;
  text-transform: lowercase;
  `;

export const Heading1 = styled.h1`
  font: 900 4.5rem Fraunces;
  line-height: 4.5rem;
`;

export const Heading2 = styled.h2`
  font: 900 2.5rem Fraunces;
  line-height: 3rem;
`;

export const Heading3 = styled.h3`
  font: 900 2rem Fraunces;
  line-height: 2.25rem;
`;

export const Heading4 = styled.h4`
  font: 900 1.5rem Fraunces;
  line-height: 2rem;
`;

export const Text = styled.p`
  font: 900 1rem Barlow;
  line-height: 1.625rem;
  color: ${({color}) => color ? color : colorLC};
`;