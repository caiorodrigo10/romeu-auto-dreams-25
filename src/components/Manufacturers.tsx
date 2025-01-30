import { Car } from "lucide-react";

const Manufacturers = () => {
  const brands = [
    {
      name: "Toyota",
      icon: <Car className="w-16 h-16 text-accent mb-4" />,
      description: "Líder mundial em inovação automotiva"
    },
    {
      name: "Honda",
      icon: <Car className="w-16 h-16 text-accent mb-4" />,
      description: "Excelência em tecnologia e confiabilidade"
    },
    {
      name: "GMC",
      icon: <Car className="w-16 h-16 text-accent mb-4" />,
      description: "Força e robustez americana"
    }
  ];

  return (
    <section id="manufacturers" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Marcas Parceiras
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-12 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-accent/10 transition-colors duration-300"
            >
              {brand.icon}
              <span className="text-2xl font-bold text-white mb-2">{brand.name}</span>
              <p className="text-white/80 text-center">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;