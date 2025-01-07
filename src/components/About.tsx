import { Award, Users, Car } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Award,
      value: "7+",
      label: "Anos de Experiência",
    },
    {
      icon: Users,
      value: "500+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: Car,
      value: "5",
      label: "Fabricantes Parceiras",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Experiência e Confiança
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-primary/50 backdrop-blur-sm animate-fade-in"
            >
              <stat.icon className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;