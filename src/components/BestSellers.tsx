import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const BestSellers = () => {
  const bestSellers = [
    {
      name: "Toyota RAV4",
      image: "/lovable-uploads/rav4.jpg",
      price: "US$ 27,575",
      features: ["SUV Compacto", "Consumo Eficiente", "Alta Confiabilidade"],
      testimonial: {
        name: "Carlos Mendes",
        text: "Comprei meu RAV4 através do Romeu e não poderia estar mais satisfeito. O carro é extremamente confortável e econômico.",
        rating: 5
      }
    },
    {
      name: "Honda CR-V",
      image: "/lovable-uploads/crv.jpg",
      price: "US$ 28,410",
      features: ["Espaço Interno Amplo", "Tecnologia Avançada", "Segurança 5 Estrelas"],
      testimonial: {
        name: "Ana Paula Silva",
        text: "O CR-V superou todas as minhas expectativas. O processo de compra foi tranquilo e o Romeu me ajudou em cada etapa.",
        rating: 5
      }
    },
    {
      name: "Tesla Model Y",
      image: "/lovable-uploads/model-y.jpg",
      price: "US$ 43,990",
      features: ["100% Elétrico", "Autopilot", "Alta Performance"],
      testimonial: {
        name: "Ricardo Santos",
        text: "Melhor decisão que já tomei. O Model Y é revolucionário e o suporte do Romeu foi fundamental na escolha.",
        rating: 5
      }
    },
    {
      name: "Toyota Camry",
      image: "/lovable-uploads/camry.jpg",
      price: "US$ 25,945",
      features: ["Sedan Luxuoso", "Híbrido Disponível", "Design Moderno"],
      testimonial: {
        name: "Mariana Costa",
        text: "O Camry é o equilíbrio perfeito entre luxo e economia. O Romeu encontrou exatamente o que eu procurava.",
        rating: 5
      }
    },
    {
      name: "Ford F-150",
      image: "/lovable-uploads/f150.jpg",
      price: "US$ 33,695",
      features: ["Picape Robusta", "Alta Capacidade", "Tecnologia Avançada"],
      testimonial: {
        name: "Pedro Oliveira",
        text: "A F-150 é simplesmente impressionante. O Romeu me ajudou a realizar o sonho de ter a melhor picape do mercado.",
        rating: 5
      }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Mais Vendidos nos EUA
        </h2>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {bestSellers.map((car, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-accent text-white">
                          {car.price}
                        </Badge>
                      </div>
                    </div>
                    
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