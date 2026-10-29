import { HeroSlider } from "@/components/home/hero-slider";
import {
  CategorySection,
  ClosingSection,
  FeaturedSection,
  InstagramSection,
  PreorderSection,
} from "@/components/home/home-sections";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CategorySection />
      <FeaturedSection />
      <PreorderSection />
      <ClosingSection />
      <InstagramSection />
    </>
  );
}
