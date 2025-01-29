import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Message sent! We'll get back to you soon.");
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-f11-navy mb-12">
            Contact Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactInfo
                icon={Phone}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={Mail}
                title="Email"
                content="info@f11firesafety.com"
              />
              <ContactInfo
                icon={MapPin}
                title="Address"
                content="123 Safety Street, Fire City, FC 12345"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-f11-red"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-f11-red"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-f11-red"
              />
              <button
                type="submit"
                className="w-full bg-f11-red hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
              {formStatus && (
                <p className="text-green-600 text-center">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
}) => (
  <div className="flex items-start space-x-4">
    <Icon className="h-6 w-6 text-f11-red" />
    <div>
      <h3 className="font-semibold text-f11-navy">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);