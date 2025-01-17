import { WhatsappIcon } from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => window.open(getWhatsAppLink(), '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contato WhatsApp"
      >
        <WhatsappIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;