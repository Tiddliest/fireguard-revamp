import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-f11-navy to-black pt-16">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Fire Safety Services & Training
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Protecting lives and property with expert fire safety solutions
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-f11-red hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};