import { Header } from "../components/Header";
import { SectionHero } from "../components/SectionHero";
import { SectionCollection } from "../components/SectionCollection";
import { SectionFeatured } from "../components/SectionFeatured";
import { Footer } from "../components/Footer";

import HomeHeroBg from "../assets/home/desktop/image-hero-coffeepress.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero
        bgSize="600px"
        bgImg={HomeHeroBg}
        text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        textSize="1rem"
        textWidth="442px"
        title={`Great coffee<br/> made simple.`}
        titleSize="4.5rem"
        buttonText="Create your plan"
      />

      <SectionCollection />
      <SectionFeatured />
      <Footer />
    </>
  );
}