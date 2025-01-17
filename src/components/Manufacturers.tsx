import { Car } from "lucide-react";

const Manufacturers = () => {
  const brands = [
    {
      name: "Toyota",
      icon: <Car className="w-16 h-16 text-accent mb-4" />
    },
    {
      name: "Honda",
      icon: <Car className="w-16 h-16 text-accent mb-4" />
    }
  ];

  return (
    <section id="manufacturers" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Marcas Parceiras
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-12 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-accent/10 transition-colors duration-300"
            >
              {brand.icon}
              <span className="text-2xl font-bold text-white">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;