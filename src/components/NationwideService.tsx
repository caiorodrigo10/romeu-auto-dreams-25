import { MapPin } from "lucide-react";

const NationwideService = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <MapPin className="w-16 h-16 text-accent animate-bounce" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Presente em Todo Território Americano
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Da costa leste à oeste, do norte ao sul, estamos prontos para encontrar o carro dos seus sonhos em qualquer lugar dos Estados Unidos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary/50 backdrop-blur-sm rounded-lg border border-accent/10 hover:bg-secondary/60 transition-colors">
              <h3 className="text-xl font-semibold text-accent mb-3">Costa a Costa</h3>
              <p className="text-white/80">
                Acesso aos melhores veículos em todos os estados, garantindo as melhores ofertas do mercado.
              </p>
            </div>
            
            <div className="p-6 bg-secondary/50 backdrop-blur-sm rounded-lg border border-accent/10 hover:bg-secondary/60 transition-colors">
              <h3 className="text-xl font-semibold text-accent mb-3">Logística Nacional</h3>
              <p className="text-white/80">
                Entrega do seu veículo em qualquer estado, com segurança e praticidade.
              </p>
            </div>
            
            <div className="p-6 bg-secondary/50 backdrop-blur-sm rounded-lg border border-accent/10 hover:bg-secondary/60 transition-colors">
              <h3 className="text-xl font-semibold text-accent mb-3">Suporte Local</h3>
              <p className="text-white/80">
                Rede de parceiros em todo o país para garantir o melhor atendimento onde você estiver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationwideService;