import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Manufacturers from "@/components/Manufacturers";
import PurchaseProcess from "@/components/PurchaseProcess";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import RomeuPita from "@/components/RomeuPita";
import Reasons from "@/components/Reasons";
import BestSellers from "@/components/BestSellers";

const Index = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <Reasons />
      <About />
      <Manufacturers />
      <PurchaseProcess />
      <RomeuPita />
      <BestSellers />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;