import styled from "styled-components";

export const Accordion = styled.div`
  
`;

export const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
`;

export const ToggleButtonText = styled.span`
  
`;

export const ToggleButtonIcon = styled.span`
  
`;

export const Text = styled.p`
  display: none;

  ${props => props.isActive && `
    display: block;
  `};
`;
