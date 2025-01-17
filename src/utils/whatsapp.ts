export const WHATSAPP_NUMBER = "+17543265530";
export const DEFAULT_MESSAGE = "Olá Romeu! Gostaria de saber mais sobre como comprar um carro nos EUA.";

export const getWhatsAppLink = (message: string = DEFAULT_MESSAGE) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};