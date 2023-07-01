import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 50px 80px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  display: block;
  width: 236px;
  height: 26px;
  flex-shrink: 0; // preciso disso aqui ou root?
`;