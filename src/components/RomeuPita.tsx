import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";

const RomeuPita = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Romeu Pita
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Com mais de 5 anos de experiência no mercado automotivo americano, me dedico a realizar o sonho de brasileiros que desejam adquirir seu carro nos Estados Unidos.
            </p>
            <p className="text-white/90 text-lg mb-8">
              Minha missão é proporcionar uma experiência tranquila e segura, cuidando de todo o processo desde a escolha do veículo até a entrega final.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
              onClick={() => window.open(getWhatsAppLink(), '_blank')}
            >
              Entre em Contato
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="/lovable-uploads/4c8f1f52-cc18-44c9-b4cb-245e3aea2770.png"
              alt="Romeu Pita"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RomeuPita;