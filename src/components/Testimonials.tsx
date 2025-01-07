import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      text: "O Romeu me ajudou a encontrar o carro perfeito para minha família. Processo muito tranquilo e profissional.",
      location: "Florida",
    },
    {
      name: "Maria Santos",
      text: "Excelente atendimento! Me auxiliou em todo o processo de compra, desde a escolha até a documentação.",
      location: "Texas",
    },
    {
      name: "Pedro Costa",
      text: "Recomendo muito! O Romeu tem um conhecimento incrível do mercado e conseguiu condições excelentes.",
      location: "California",
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