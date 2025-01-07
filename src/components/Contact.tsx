import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Vamos conversar sobre seu próximo carro
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Nome"
              className="bg-secondary/50 border-accent/20 text-white"
              required
            />
            <Input
              placeholder="Email"
              type="email"
              className="bg-secondary/50 border-accent/20 text-white"
              required
            />
          </div>
          
          <Input
            placeholder="Telefone"
            type="tel"
            className="bg-secondary/50 border-accent/20 text-white"
            required
          />
          
          <Textarea
            placeholder="Mensagem"
            className="bg-secondary/50 border-accent/20 text-white h-32"
            required
          />
          
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-6"
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;