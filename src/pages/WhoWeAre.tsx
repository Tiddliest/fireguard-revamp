import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-f11-navy mb-8">Who We Are</h1>
        <div className="grid gap-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                F11 Fire Safety is a leading provider of fire safety solutions in California. With over two decades of experience, we've established ourselves as trusted experts in fire protection services, training, and consultation.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-f11-navy mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to protect lives and property by providing comprehensive fire safety solutions. We believe that proper fire safety is not just about compliance – it's about creating a culture of safety that ensures everyone goes home at the end of the day.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-f11-navy mb-4">Our Values</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Excellence in service delivery</li>
                <li>Commitment to safety</li>
                <li>Professional integrity</li>
                <li>Continuous improvement</li>
                <li>Customer satisfaction</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;