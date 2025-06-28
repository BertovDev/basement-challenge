import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <Footer />
    </div>
  );
}
