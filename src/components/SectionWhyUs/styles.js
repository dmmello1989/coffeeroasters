import styled from "styled-components";
import * as bean from "../../styles/bean";

export const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  min-height: ${props => props.bgSize ? props.bgSize : "450px"};
  height: auto;
  padding: 136px 85px 188px;
  margin: 0 auto;
  border-radius: 8px;
  background: url(${props => props.bgImg}) center/cover no-repeat;
  
  @media (max-width: 767px) {
    background: url(${props => props.bgImg}) center/cover no-repeat;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const BgTitle = styled(bean.BigTitle)`
  position: relative;
  display: block;
  top: 25px;
  left: 50%;
  line-height: 132px;
  text-align: center;
  transform: translateX(-50%);
  background: -webkit-linear-gradient(90deg, ${bean.colorLC} 0%, ${bean.colorG});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  z-index: -1;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemImg = styled.img`
  display: block;
  width: 256px;
  height: 193px;
  margin-bottom: 71.55px;
`;

export const ItemTitle = styled.h2`
  margin-bottom: 24px;
  color: ${bean.colorCT};
  font: 900 1.5rem Fraunces;
  text-align: center;
`;

export const ItemText = styled.p`
  width: 255px;
  color: ${bean.colorCT};
  font: 400 1rem Barlow;
  line-height: 1.625rem;
  text-align: center;

  & + & {
    margin-left: 30px;
  }
`;