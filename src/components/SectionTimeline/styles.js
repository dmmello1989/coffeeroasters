import styled from "styled-components";
import * as bean from "../../styles/bean";

export const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  height: auto;
  margin: 0 auto 400px;
`;

export const Label = styled(bean.Heading4)`
  display: block;
  margin-bottom: 80px;
`;

export const List = styled.ul`
  position: absolute;
  bottom: -150px;
  left: 50%;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
  transform: translateX(-50%);
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  width: 350px;
  height: 382px;
  padding: 72px 46px 48px;
  border-radius: 8px;
  background-color: ${bean.colorDC};

  & + & {
    margin-left: 30px;
  }
`;

export const ItemImg = styled.img`
  display: block;
  width: 72px;
  margin-bottom: 56px;
`;

export const ItemTitle = styled(bean.Heading4)`
  margin-bottom: 24px;
  text-align: center;
`;

export const ItemText = styled(BoxText)`
  opacity: 1;
  max-width: 100%;
`;