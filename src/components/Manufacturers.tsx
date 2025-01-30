import { cn } from "@/lib/utils";
import Image from "../components/ui/image";

const Manufacturers = () => {
  const brands = [
    {
      name: "Toyota",
      logo: "/lovable-uploads/37b2c0e4-7c60-46a2-b691-f7a640d31d9e.png",
      description: "Líder mundial em inovação automotiva"
    },
    {
      name: "Honda",
      logo: "/lovable-uploads/54f8f13c-50da-44c5-bc21-bcf4a92b0420.png",
      description: "Excelência em tecnologia e confiabilidade"
    },
    {
      name: "GMC",
      logo: "/lovable-uploads/31cff707-5e01-488a-a8b3-03404b86f982.png",
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
              <div className="w-32 h-32 mb-4 relative flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className={cn(
                    "object-contain",
                    brand.name === "Honda" && "w-full h-full",
                    brand.name === "Toyota" && "w-full h-full",
                    brand.name === "GMC" && "w-full h-full"
                  )}
                />
              </div>
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