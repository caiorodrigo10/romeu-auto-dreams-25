import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-accent" />
              <a href="mailto:contato@romeuauto.com.br" className="hover:text-accent transition-colors">
                contato@romeuauto.com.br
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" />
              <a href="tel:+5511999999999" className="hover:text-accent transition-colors">
                (11) 99999-9999
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/lovable-uploads/04a2ed0a-67a6-49ed-b761-5a4765d133c1.png"
              alt="Romeu Pita"
              className="h-16"
            />
          </div>
        </div>

        <Separator className="my-8 bg-accent/20" />

        <div className="text-center text-sm text-accent/80">
          © {new Date().getFullYear()} Romeu Auto Dreams. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;