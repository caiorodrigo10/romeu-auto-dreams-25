import { Car } from "lucide-react";

const Manufacturers = () => {
  const brands = [
    {
      name: "Toyota",
      icon: <Car className="w-12 h-12 text-accent mb-4" />
    },
    {
      name: "Honda",
      icon: <Car className="w-12 h-12 text-accent mb-4" />
    },
    {
      name: "Ford",
      icon: <Car className="w-12 h-12 text-accent mb-4" />
    },
    {
      name: "Chevrolet",
      icon: <Car className="w-12 h-12 text-accent mb-4" />
    },
    {
      name: "Hyundai",
      icon: <Car className="w-12 h-12 text-accent mb-4" />
    },
  ];

  return (
    <section id="manufacturers" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Fabricantes Parceiras
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-accent/10 transition-colors duration-300"
            >
              {brand.icon}
              <span className="text-xl font-bold text-white">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;