import * as S from "./styles";
import { useMediaQuery } from "react-responsive";
import { MenuDesktop } from "./MenuDesktop/menuDesktop";
import { MenuMobile } from "./MenuMobile/menuMobile";

export const Menu = () => {
  const desktopView = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <S.Menu>
      {desktopView ? <MenuDesktop /> : <MenuMobile />}
    </S.Menu>
  );
};