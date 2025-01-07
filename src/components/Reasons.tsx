import { Car, DollarSign, Flag, ThumbsUp, Road } from "lucide-react";

const Reasons = () => {
  const reasons = [
    {
      icon: <Car className="w-12 h-12 text-accent mb-4" />,
      title: "Carros Mais Modernos",
      description: "Acesso aos modelos mais recentes e tecnológicos do mercado automotivo mundial."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-accent mb-4" />,
      title: "Melhor Custo-Benefício",
      description: "Preços mais competitivos e maior valorização do investimento."
    },
    {
      icon: <Flag className="w-12 h-12 text-accent mb-4" />,
      title: "Garantia de Fábrica",
      description: "Proteção total com garantia oficial das montadoras americanas."
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-accent mb-4" />,
      title: "Qualidade Superior",
      description: "Padrão de qualidade americano reconhecido mundialmente."
    },
    {
      icon: <Road className="w-12 h-12 text-accent mb-4" />,
      title: "Quilometragem Zero",
      description: "Seja o primeiro e único dono, sem histórico de uso anterior."
    }
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Por que Comprar um Carro Zero na América?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-secondary p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/80">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;