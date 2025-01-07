import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Manufacturers from "@/components/Manufacturers";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Manufacturers />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;