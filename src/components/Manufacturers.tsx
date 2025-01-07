const Manufacturers = () => {
  const brands = [
    {
      name: "Toyota",
      logo: "/logos/toyota.svg"
    },
    {
      name: "Honda",
      logo: "/logos/honda.svg"
    },
    {
      name: "Ford",
      logo: "/logos/ford.svg"
    },
    {
      name: "Chevrolet",
      logo: "/logos/chevrolet.svg"
    },
    {
      name: "Hyundai",
      logo: "/logos/hyundai.svg"
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
              className="flex items-center justify-center p-8 rounded-lg bg-secondary/50 backdrop-blur-sm hover:bg-accent/10 transition-colors duration-300"
            >
              <img 
                src={brand.logo} 
                alt={`Logo ${brand.name}`} 
                className="w-24 h-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;