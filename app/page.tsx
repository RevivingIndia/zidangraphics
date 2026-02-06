import Hero from "@/components/sections/Hero";
import ProductCategories from "@/components/sections/ProductCategories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CorporateBulk from "@/components/sections/CorporateBulk";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <CorporateBulk />
      <Testimonials />
    </main>
  );
}
