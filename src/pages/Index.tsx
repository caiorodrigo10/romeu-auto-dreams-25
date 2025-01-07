import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Manufacturers from "@/components/Manufacturers";
import PurchaseProcess from "@/components/PurchaseProcess";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import RomeuPita from "@/components/RomeuPita";
import BestSellers from "@/components/BestSellers";
import NationwideService from "@/components/NationwideService";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Manufacturers />
      <PurchaseProcess />
      <RomeuPita />
      <BestSellers />
      <NationwideService />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;