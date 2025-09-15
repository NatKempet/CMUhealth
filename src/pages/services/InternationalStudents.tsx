import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const InternationalStudents = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="secondary" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            International Students Health Services
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Comprehensive healthcare services for international students at Chiang Mai University
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Health Services Available
              </h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">General Medical Care</h3>
                  <p>Primary healthcare, routine check-ups, and basic medical treatments</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Emergency Services</h3>
                  <p>24/7 emergency care with English-speaking medical staff</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Preventive Care</h3>
                  <p>Vaccinations, health screenings, and wellness programs</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Mental Health Support</h3>
                  <p>Counseling services and psychological support</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Required Documents</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Valid Student ID Card</li>
                <li>Passport and Visa</li>
                <li>Health Insurance Documentation</li>
                <li>Medical History Records (if available)</li>
                <li>Emergency Contact Information</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Health Insurance</h2>
              <div className="space-y-4 text-foreground">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary">Mandatory Coverage</h3>
                  <p>All international students must have valid health insurance coverage during their studies</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Accepted Insurance Types:</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>University-sponsored health insurance</li>
                    <li>Private international health insurance</li>
                    <li>Home country insurance with international coverage</li>
                    <li>Thai social security (if eligible)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Language Support</h2>
              <div className="space-y-4 text-foreground">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-green-700">Available Languages</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>English (Primary support language)</li>
                    <li>Chinese (Mandarin)</li>
                    <li>Japanese</li>
                    <li>Thai (with translation service)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-800">
                    <strong>Translation Services:</strong> Available for medical consultations in other languages upon request
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Service Locations
              </h2>
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold">International Student Clinic</h3>
                  <p>Chiang Mai University Hospital, Building A, 2nd Floor</p>
                </div>
                <div>
                  <h3 className="font-semibold">Student Health Center</h3>
                  <p>Student Affairs Building, Ground Floor</p>
                </div>
                <div>
                  <h3 className="font-semibold">Emergency Department</h3>
                  <p>CMU Hospital Main Building, 24/7 Service</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Service Hours
              </h2>
              <div className="space-y-3 text-foreground">
                <div>
                  <h3 className="font-semibold">International Student Clinic</h3>
                  <p>Monday - Friday: 08:30 - 16:00</p>
                </div>
                <div>
                  <h3 className="font-semibold">General Clinic</h3>
                  <p>Monday - Friday: 08:00 - 16:00<br />Saturday: 08:00 - 12:00</p>
                </div>
                <div>
                  <h3 className="font-semibold">Emergency Services</h3>
                  <p>24 hours, 7 days a week</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  *Closed on Sundays and public holidays (except emergency)
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Contact Information
              </h2>
              <div className="space-y-2 text-foreground">
                <p><strong>International Clinic:</strong> +66 53-946-050</p>
                <p><strong>Emergency Hotline:</strong> +66 53-946-900</p>
                <p><strong>Student Affairs:</strong> +66 53-943-021</p>
                <p><strong>Email:</strong> international-health@cmu.ac.th</p>
                <p><strong>WeChat:</strong> CMU_Health_EN</p>
                <p><strong>Line:</strong> @cmu_international_health</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalStudents;