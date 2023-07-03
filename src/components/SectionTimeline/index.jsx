import * as S from "./styles";

const timenline = [
  {
    number: 1,
    title: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
  },
  {
    number: 2,
    title: "Choose the frequency",
    text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
  },
  {
    number: 3,
    title: "Receive and enjoy!",
    text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
  },
];

export const SectionTimeline = () => {
  return (
    <S.Section>
      <S.Label>How it works</S.Label>

      <S.List>
        {timenline.map((item, index) => (
          <S.Item key={`timeline-${index}`}>
            <S.Line />
            <S.Number>0{index + 1}</S.Number>
            <S.ItemTitle>{item.title}</S.ItemTitle>
            <S.ItemText>{item.text}</S.ItemText>
          </S.Item>
        ))}
      </S.List>

      <S.LinkButton>Create your plan</S.LinkButton>
    </S.Section>
  );
};