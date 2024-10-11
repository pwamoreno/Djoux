import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="mx-20 pt-5">
      <Header />
      <Hero />
      <Gallery />
      <Testimonials />
    </div>
  );
}
