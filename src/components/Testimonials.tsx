import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "@ismaelsanches10",
      text: "Sem dúvidas, o melhor! Compramos dois carros com ele e foi uma experiência nota 10. Romeu faz o impossível para conseguir o melhor negócio para o cliente!!!",
      location: "Florida",
    },
    {
      name: "@muller88",
      text: "Comprei 4 carros com Romeu! Entre eles, usados e novos. Eu sou uns desses mais de 700 clientes SUPER satisfeitos! Obrigado irmão!",
      location: "Texas",
    },
    {
      name: "@rodrigoleite26",
      text: "Atendimento top de linha, podem confiar! Comprei meu carro com ele e já estou planejando o próximo. Melhor da Flórida!",
      location: "Florida",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          O que dizem nossos clientes
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary/50 backdrop-blur-sm border-none">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-white/90 mb-4">{testimonial.text}</p>
                <div className="text-accent font-semibold">{testimonial.name}</div>
                <div className="text-white/60 text-sm">{testimonial.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;