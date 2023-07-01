import { Menu } from "../Menu";
import LogoImg from "../../assets/shared/desktop/logo.svg";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Logo src={LogoImg} alt="Coffeeroasters" />

        <Menu />
      </S.Container>
    </S.Header>
  );
};