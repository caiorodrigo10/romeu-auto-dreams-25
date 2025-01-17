import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-primary flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Realize seu sonho de ter um carro novo nos EUA
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Há 7 anos ajudando brasileiros a encontrar o carro ideal com as melhores condições
          </p>
          <Button 
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale Comigo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;