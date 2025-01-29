import { Shield, Users, ClipboardCheck, Phone } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Fire Safety Assessments",
      description: "Comprehensive evaluation of your premises and safety systems",
    },
    {
      icon: Users,
      title: "Safety Training",
      description: "Expert-led training sessions for your team",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Consulting",
      description: "Ensure your business meets all safety regulations",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock assistance for emergencies",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-f11-navy mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="h-12 w-12 text-f11-red mb-4" />
              <h3 className="text-xl font-semibold text-f11-navy mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};