import {
  CategorySection,
  ClosingCta,
  FeaturedSection,
  Hero,
  InstagramSection,
  PreorderSection,
  SpotlightSection,
  WhySection,
} from "@/components/home/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedSection />
      <PreorderSection />
      <WhySection />
      <SpotlightSection />
      <InstagramSection />
      <ClosingCta />
    </>
  );
}
