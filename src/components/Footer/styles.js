import styled from "styled-components";
import * as bean from "../../styles/bean";

export const Footer = styled.footer`
  width: 100%;
  background-color: ${bean.colorCTD};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 47px 85px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  display: block;
  width: 236px;
  height: 26px;
  margin-right: 102.9px;
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
`;

export const SocialItem = styled.li`
  flex-shrink: 0;
  cursor: pointer;
  
  & + & {
    margin-left: 32px;
  }
  `;

export const SocialIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`;