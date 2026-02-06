import Hero from "@/components/sections/Hero";
import ProductCategories from "@/components/sections/ProductCategories";
import DigitalSolutions from "@/components/sections/DigitalSolutions";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CorporateBulk from "@/components/sections/CorporateBulk";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <DigitalSolutions />
      <FeaturedProducts />
      <WhyChooseUs />
      <CorporateBulk />
      <Testimonials />
    </main>
  );
}
