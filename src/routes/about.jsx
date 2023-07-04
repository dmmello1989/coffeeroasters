import { Header } from "../components/Header";
import { SectionHero } from "../components/SectionHero";
import { Footer } from "../components/Footer";
import HomeAboutBg from "../assets/about/desktop/image-hero-whitecup.jpg";

export default function About() {
  return (
    <>
      <Header />
      <SectionHero
        bgImg={HomeAboutBg}
        text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        textSize="1rem"
        textWidth="442px"
        title="About us"
        titleSize="2.5rem"
      />
      <Footer />
    </>
  );
}