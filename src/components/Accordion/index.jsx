import * as S from "./styles";

export const Accordion = ({
  text,
  buttonText,
}) => {
  return (
    <S.Accordion>
      <S.ToggleButton>
        <S.ToggleButtonText>
          {buttonText}
        </S.ToggleButtonText>
        <S.ToggleButtonIcon />
      </S.ToggleButton>

      <S.Text>
        {text}
      </S.Text>
    </S.Accordion>
  );
};