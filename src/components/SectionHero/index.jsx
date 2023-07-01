import { Button } from "../Button";
import * as S from "./styles";

export const SectionHero = ({
  bgImg,
  bgSize,
  text,
  textSize,
  textWidth,
  title,
  titleSize,
  buttonText,
}) => {
  return (
    <S.Section bgImg={bgImg} bgSize={bgSize}>
      <S.Title dangerouslySetInnerHTML={{ __html: title}} titleSize={titleSize} />

      <S.Text textSize={textSize} textWidth={textWidth}>
        {text}
      </S.Text>

      {buttonText ? 
        <Button link="/create-your-plan" margin="56px 0">
          {buttonText}
        </Button>
      : null}
    </S.Section>
  );
};