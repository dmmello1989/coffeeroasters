import * as S from "./styles";

export const Card = ({
  cardText,
  cardTitle
}) => {
  return (
    <S.Card>
      <strong>{cardTitle}</strong>
      <br/><br/>
      {cardText}
    </S.Card>
  );
};