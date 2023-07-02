import * as S from "./styles";
import GranEspressoImg from "../../assets/home/desktop/image-gran-espresso.png";
import PlanaltoImg from "../../assets/home/desktop/image-planalto.png";
import PiccolloImg from "../../assets/home/desktop/image-piccollo.png";
import DancheImg from "../../assets/home/desktop/image-danche.png";

const coffeeTypes = [
  {
    img: GranEspressoImg,
    title: "Gran Espresso",
    text: "Light and flavorful blend with cocoa and black pepper for an intense experience."
  },
  {
    img: PlanaltoImg,
    title: "Planalto",
    text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."
  },
  {
    img: PiccolloImg,
    title: "Piccollo",
    text: "Mild and smooth blend featuring notes of toasted almond and dried cherry."
  },
  {
    img: DancheImg,
    title: "Danche",
    text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes."
  },
]

export const SectionWhyUs = () => {
  return (
    <S.Section>
      <S.Box>
        <S.Title>Why choose us?</S.Title>
        <S.Text></S.Text>

        <S.List>
          {coffeeTypes.map((coffee, index) => (
            <S.Item key={index}>
              <S.ItemImg src={coffee.img} alt={coffee.title} />
              <S.ItemTitle>{coffee.title}</S.ItemTitle>
              <S.ItemText>{coffee.text}</S.ItemText>
            </S.Item>
          ))}
        </S.List>
      </S.Box>
    </S.Section>
  );
};