import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  InfoIcon,
  Globe,
  FileText,
  Phone,
  Shield,
  Loader2,
} from "lucide-react";
import useStore from "../store/useStore";
import travelRequirements from "../constants/travelRequirements";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logout } = useStore();
  const navigate = useNavigate();
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-10 h-10 text-violet-600" />
            <span className="text-2xl font-bold text-violet-600">
              HealthPass
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              navigate("/");
              logout();
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 py-28">
    <div
      className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    ></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="bg-white/5 backdrop-blur-sm p-10 rounded-xl inline-block">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Revolutionizing Border Control <br />
          <span className="text-violet-100">
            with Digital Health Verification
          </span>
        </h1>
        <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
          HealthPass streamlines immigration processes worldwide through secure,
          verified health documentation and instant QR verification.
        </p>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
        Why Choose HealthPass?
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Our innovative platform combines advanced security with seamless
        verification, revolutionizing the way travelers handle immigration
        documentation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-violet-200 transform -translate-y-1/2"></div>

        <Card className="border hover:border-violet-500 transition-all hover:shadow-lg bg-white relative z-10">
          <CardHeader>
            <Globe className="h-12 w-12 text-violet-600 mb-2" />
            <CardTitle className="text-xl">Smart Immigration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Reduce immigration processing time by up to 80% with our
              AI-powered verification system. Trusted by immigration authorities
              in over 50 countries.
            </p>
          </CardContent>
        </Card>

        <Card className="border hover:border-violet-500 transition-all hover:shadow-lg bg-white relative z-10 md:translate-y-8">
          <CardHeader>
            <FileText className="h-12 w-12 text-violet-600 mb-2" />
            <CardTitle className="text-xl">Advanced Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Your documents are encrypted and protected using industry-leading
              security standards, ensuring tamper-proof verification and
              compliance with international regulations.
            </p>
          </CardContent>
        </Card>

        <Card className="border hover:border-violet-500 transition-all hover:shadow-lg bg-white relative z-10">
          <CardHeader>
            <Phone className="h-12 w-12 text-violet-600 mb-2" />
            <CardTitle className="text-xl">Instant Access</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Generate QR codes instantly after DocuSign verification. Access
              your travel credentials 24/7 through your email.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-violet-200 transform -translate-y-1/2"></div>

        <Card className="border hover:border-violet-500 transition-all hover:shadow-lg bg-white relative z-10 md:translate-x-8">
          <CardHeader>
            <Shield className="h-12 w-12 text-violet-600 mb-2" />
            <CardTitle className="text-xl">Real-time Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Stay informed with automatic notifications about document status,
              travel requirements changes, and verification milestones.
            </p>
          </CardContent>
        </Card>

        <Card className="border hover:border-violet-500 transition-all hover:shadow-lg bg-white relative z-10 md:-translate-x-8">
          <CardHeader>
            <FileText className="h-12 w-12 text-violet-600 mb-2" />
            <CardTitle className="text-xl">DocuSign Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Seamless document signing and verification through DocuSign's
              trusted platform, ensuring legal compliance and authenticity.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-50 border-t">
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-violet-600">
                Cookies
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Stay updated with our latest features
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-8 text-center text-gray-600">
        <p>&copy; 2024 HealthPass. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Landing = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useStore();
  const [agreementUrl, setAgreementUrl] = useState(null);

  const handleDocuSign = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/workflows`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination: selectedCountry,
            requirements: travelRequirements[selectedCountry],
            email: user.user.email,
            full_name: user.user.name,
          }),
        }
      );
      const responseData = await response.json();
      window.location.href = responseData.instance_url;
    } catch (error) {
      console.error("Failed to start verification process:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Get agreement URL from API
    const getAgreementUrl = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/click`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              clientUserId: localStorage.getItem("email"),
              documentData: {
                fullName: localStorage.getItem("full_name"),
                email: localStorage.getItem("email"),
                company: "",
                title: "",
                date: new Date().toISOString().split("T")[0],
              },
            }),
          }
        );
        const data = await response.json();
        setAgreementUrl(data.agreementUrl);
        console.log(data.agreementUrl);
        // Initialize Clickwrap with agreement URL
        if (window.docuSignClick && data.agreementUrl) {
          window.docuSignClick.Clickwrap.render(
            {
              agreementUrl: data.agreementUrl,
              onAgreed: () => {
                console.log("User has agreed to the terms");
                // You can trigger the donation process here
                handleDonate();
              },
            },
            "#ds-clickwrap"
          );
        }
      } catch (error) {
        console.error("Error getting agreement URL:", error);
      }
    };

    getAgreementUrl();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div id="ds-clickwrap"></div>
      <Header />
      <Hero />

      <div className="container mx-auto p-6 max-w-4xl flex-grow relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl"></div>
        <Card className="border shadow-lg relative bg-white">
          <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
            <CardTitle className="text-2xl">
              Smart Travel Documentation
            </CardTitle>
            <CardDescription className="text-lg">
              Get instant access to country-specific requirements and secure
              digital verification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Select Destination Country
              </label>
              <Select
                onValueChange={setSelectedCountry}
                value={selectedCountry}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(travelRequirements).map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedCountry && (
              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-semibold text-violet-700">
                  Required Documents:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {travelRequirements[selectedCountry].map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-center gap-2 bg-violet-50 p-3 rounded-lg"
                    >
                      <FileText className="h-5 w-5 text-violet-600" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Alert className="bg-violet-50 border-violet-200">
              <InfoIcon className="h-5 w-5 text-violet-600" />
              <AlertDescription className="text-violet-700">
                <span className="font-semibold">Streamlined Process:</span>{" "}
                Upload your documents, complete the DocuSign verification, and
                receive a secure QR code for hassle-free immigration checks.
              </AlertDescription>
            </Alert>

            <Button
              onClick={handleDocuSign}
              disabled={!selectedCountry || isLoading}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90 
                transition-all text-lg py-6"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading
                ? "Starting Verification..."
                : "Begin Secure Verification Process"}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Features />
      <Footer />
    </div>
  );
};

export default Landing;
