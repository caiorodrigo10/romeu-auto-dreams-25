import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const BestSellers = () => {
  const bestSellers = [
    {
      name: "Toyota RAV4",
      image: "/lovable-uploads/73c1ee5d-2a5b-4b9b-8d6d-523c0a9758ae.png",
      link: "https://www.toyota.com/rav4/",
      features: ["SUV Compacto", "Consumo Eficiente", "Alta Confiabilidade"],
      testimonial: {
        name: "Carlos Mendes",
        text: "Comprei meu RAV4 através do Romeu e não poderia estar mais satisfeito. O carro é extremamente confortável e econômico.",
        rating: 5
      }
    },
    {
      name: "Novo CRV 2025",
      image: "/lovable-uploads/5336e285-6143-44dc-b60f-b94f93a1e26a.png",
      link: "https://automobiles.honda.com/cr-v",
      features: ["Espaço Interno Amplo", "Tecnologia Avançada", "Segurança 5 Estrelas"],
      testimonial: {
        name: "Ana Paula Silva",
        text: "O CR-V superou todas as minhas expectativas. O processo de compra foi tranquilo e o Romeu me ajudou em cada etapa.",
        rating: 5
      }
    },
    {
      name: "Novo Corolla 2025",
      image: "/lovable-uploads/9bbd2679-b600-4e75-bcb5-5350448a80c2.png",
      link: "https://www.toyota.com/corolla/",
      features: ["Design Moderno", "Economia", "Conforto Superior"],
      testimonial: {
        name: "Mariana Costa",
        text: "O Corolla é o equilíbrio perfeito entre luxo e economia. O Romeu encontrou exatamente o que eu procurava.",
        rating: 5
      }
    },
    {
      name: "Novo Civic 2025",
      image: "/lovable-uploads/bc170c76-ba7a-4f7b-8a65-17123a9a9158.png",
      link: "https://automobiles.honda.com/civic-sedan",
      features: ["Tecnologia de Ponta", "Design Esportivo", "Eficiência"],
      testimonial: {
        name: "Ricardo Santos",
        text: "O Civic é simplesmente incrível. O Romeu me ajudou a escolher a versão perfeita para mim.",
        rating: 5
      }
    },
    {
      name: "Civic Sport",
      image: "/lovable-uploads/9923864d-c9f2-437d-8d8b-c1b0aabf7264.png",
      link: "https://automobiles.honda.com/tools/build-and-price-result?modelid=FE2F5SEW&modelseries=civic-sedan&modelyear=2025&extcolorcode=NH-731P#section=Powertrain&group=Powertrain&view=Interior&angle=0&state=TTpGRTJGNVNFVyRFQzpOSC03MzFQJEhDOnVuZGVmaW5lZCRJQzpCSyRPOiRGOkZJRlMkRUNDOkJLJEVDWDo=&payment=&paymentType=",
      features: ["Versão Esportiva", "Performance Superior", "Interior Premium"],
      testimonial: {
        name: "Pedro Oliveira",
        text: "O Civic Sport é a combinação perfeita de esportividade e conforto. Agradeço ao Romeu pela excelente indicação.",
        rating: 5
      }
    },
    {
      name: "Corolla S2 2025",
      image: "/lovable-uploads/65057df4-1efa-489b-8d01-8aad7072fa99.png",
      link: "https://www.toyota.com/configurator/build/step/color/year/2025/series/corolla/model/1864/exteriorcolor/03T3/interiorcolor/FC26/packages/FE/?bap_guid=aeb3d79e-20c3-4e8b-82ca-158f22405399",
      features: ["Versão Especial", "Interior Luxuoso", "Máximo Desempenho"],
      testimonial: {
        name: "Julia Almeida",
        text: "O Corolla S2 superou todas as expectativas. O Romeu foi fundamental na escolha desta versão especial.",
        rating: 5
      }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Mais Vendidos
        </h2>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {bestSellers.map((car, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <a 
                      href={car.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video relative mb-4 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                    >
                      <img
                        src={car.image}
                        alt={car.name}
                        className="object-cover w-full h-full"
                      />
                    </a>
                    
                    <h3 className="text-2xl font-bold mb-4">{car.name}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Características:</h4>
                      <ul className="space-y-2">
                        {car.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{car.testimonial.name}</span>
                        <div className="flex">
                          {Array.from({ length: car.testimonial.rating }).map((_, idx) => (
                            <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm italic">{car.testimonial.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BestSellers;