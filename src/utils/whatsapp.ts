export const getWhatsAppLink = () => {
  const phoneNumber = "14073009185";
  const message = "Olá! Gostaria de saber mais sobre como comprar um carro nos EUA.";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};