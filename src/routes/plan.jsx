import { Header } from "../components/Header";
import { SectionHero } from "../components/SectionHero";
import { Footer } from "../components/Footer";
import HomePlanBg from "../assets/plan/desktop/image-hero-blackcup.jpg";

export default function Plan() {
  return (
    <>
      <Header />
      <SectionHero
        bgImg={HomePlanBg}
        text="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."
        textSize="1rem"
        textWidth="442px"
        title="Create plan"
        titleSize="4.5rem"
      />
      <Footer />
    </>
  );
}