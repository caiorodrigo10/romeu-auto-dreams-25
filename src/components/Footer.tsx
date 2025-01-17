import { Mail, Phone } from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/lovable-uploads/04a2ed0a-67a6-49ed-b761-5a4765d133c1.png"
              alt="Romeu Pita"
              className="h-16 mb-6"
            />
            <p className="text-white/80 max-w-md">
              Há 5 anos ajudando brasileiros a realizar o sonho de ter um carro nos Estados Unidos.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              +1 (407) 300-9185
            </a>
            
            <a 
              href="mailto:contato@romeupita.com"
              className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              contato@romeupita.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-center">
            © {new Date().getFullYear()} Romeu Pita. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;