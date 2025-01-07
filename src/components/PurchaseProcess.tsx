import { ArrowRight, Car, FileCheck, HandshakeIcon, MessageSquare } from "lucide-react";

const PurchaseProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Primeiro Contato",
      description: "Entre em contato conosco para discutir seus objetivos e preferências",
    },
    {
      icon: Car,
      title: "Escolha do Veículo",
      description: "Selecione o carro ideal dentre as melhores marcas do mercado",
    },
    {
      icon: FileCheck,
      title: "Documentação",
      description: "Auxiliamos com toda a documentação necessária para a compra",
    },
    {
      icon: HandshakeIcon,
      title: "Entrega",
      description: "Realizamos a entrega do seu novo veículo com toda segurança",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Processo de Compra
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-primary/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-accent/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurchaseProcess;