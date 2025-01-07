import { MapPin } from "lucide-react";

const NationwideService = () => {
  return (
    <section className="py-24 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <MapPin className="w-16 h-16 text-accent animate-bounce" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Presente em Todo Território Americano
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Da costa leste à oeste, do norte ao sul, estamos prontos para encontrar o carro dos seus sonhos em qualquer lugar dos Estados Unidos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Costa a Costa</h3>
              <p className="text-muted-foreground">
                Acesso aos melhores veículos em todos os estados, garantindo as melhores ofertas do mercado.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Logística Nacional</h3>
              <p className="text-muted-foreground">
                Entrega do seu veículo em qualquer estado, com segurança e praticidade.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Suporte Local</h3>
              <p className="text-muted-foreground">
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