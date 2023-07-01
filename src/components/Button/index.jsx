import * as S from "./styles";

export const Button = ({
  link,
  margin,
  children
}) => {
  const handleClick = () => {
    return link;
  }

  return (
    <S.Button margin={margin} onClick={() => handleClick()}>
      {children}
    </S.Button>
  );
};