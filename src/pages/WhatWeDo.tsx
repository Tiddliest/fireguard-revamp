import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Shield, Users, ClipboardCheck, Bell, Tool, Book } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: Shield,
      title: "Fire Safety Assessments",
      description: "Comprehensive evaluation of your premises and safety systems to identify potential hazards and ensure compliance with regulations."
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Custom fire safety training programs designed to meet your specific needs and ensure your team is prepared for any emergency."
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Consulting",
      description: "Expert guidance to help you navigate and comply with all relevant fire safety regulations and standards."
    },
    {
      icon: Bell,
      title: "Fire Alarm Systems",
      description: "Installation, maintenance, and testing of fire alarm systems to ensure they function properly when needed."
    },
    {
      icon: Tool,
      title: "Equipment Maintenance",
      description: "Regular inspection and maintenance of fire safety equipment to keep your systems in optimal condition."
    },
    {
      icon: Book,
      title: "Documentation Services",
      description: "Complete documentation of all fire safety procedures, inspections, and maintenance records."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-f11-navy mb-8">What We Do</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <service.icon className="h-12 w-12 text-f11-red mb-4" />
                <h3 className="text-xl font-semibold text-f11-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;