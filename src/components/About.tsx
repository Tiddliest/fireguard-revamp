export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-f11-navy mb-6">
            About F11 Fire Safety
          </h2>
          <p className="text-gray-600 mb-8">
            With over 20 years of experience in fire safety, we've helped countless
            businesses and organizations create safer environments. Our team of
            certified professionals is dedicated to providing top-tier fire safety
            solutions and training.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Stat number="20+" label="Years Experience" />
            <Stat number="1000+" label="Clients Served" />
            <Stat number="100%" label="Safety Success" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div className="animate-fade-up">
    <div className="text-3xl font-bold text-f11-red mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);