import * as S from "./styles";

export const MenuDesktop = () => {
  return (
    <S.MenuWrapper>
      <S.MenuItem to="/">
        Home
      </S.MenuItem>
      <S.MenuItem to="/about-us">
        About us
      </S.MenuItem>
      <S.MenuItem to="/create-your-plan">
        Create your plan
      </S.MenuItem>
    </S.MenuWrapper>
  )
}