import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Marquee />
        <Products />
        <Footer />
      </div>
    </div>
  );
}
