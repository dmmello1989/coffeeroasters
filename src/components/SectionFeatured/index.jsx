import * as S from "./styles";
import BeanIcon from "../../assets/home/desktop/icon-coffee-bean.svg";
import GiftIcon from "../../assets/home/desktop/icon-gift.svg";
import TruckIcon from "../../assets/home/desktop/icon-truck.svg";

const features = [
  {
    img: BeanIcon,
    title: "Best quality",
    text: "Discover an endless variety of the world's best artisan coffee from each of our roasters."
  },
  {
    img: GiftIcon,
    title: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment."
  },
  {
    img: TruckIcon,
    title: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
  },
];

export const SectionFeatured = () => {
  return (
    <S.Section>
      <S.Box>
        <S.BoxTitle>Why choose us?</S.BoxTitle>
        <S.BoxText>
          A large part of our role is choosing which particular coffees will be featured 
          in our range. This means working closely with the best coffee growers to give 
          you a more impactful experience on every level.
        </S.BoxText>

        <S.List>
          {features.map((item, index) => (
            <S.Item key={index}>
              <S.ItemImg src={item.img} alt={item.title} />
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemText>{item.text}</S.ItemText>
            </S.Item>
          ))}
        </S.List>
      </S.Box>
    </S.Section>
  );
};