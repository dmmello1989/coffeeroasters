import styled from "styled-components";
import { Link } from "react-router-dom";
import * as bean from "../../../styles/bean";

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 282px;
`;

export const MenuItem = styled(Link)`
  font: 700 0.75rem Barlow;
  line-height: 15px;
  text-transform: uppercase;
  letter-spacing: 0.923px;
  color: ${bean.colorG};
`;