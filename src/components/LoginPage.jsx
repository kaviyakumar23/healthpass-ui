import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Globe, UserCircle, Loader2 } from "lucide-react";

import {
  requestAuthCode,
  generateCodeChallenge,
  generateCodeVerifier,
} from "../utils/oauth";
import useStore from "../store/useStore";

const LoginPage = () => {
  const { setPKCE, auth, setAuthLoading } = useStore();

  const handleDocuSignLogin = async () => {
    setAuthLoading(true);
    try {
      const verifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(verifier);
      setPKCE(verifier, codeChallenge);
      await requestAuthCode(codeChallenge);
    } catch (error) {
      console.error("Error initiating OAuth flow:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-600 to-purple-600 flex flex-col items-center justify-center p-4">
      {/* Logo and Title */}
      <div className="mb-12 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-12 h-12 text-white" />
          <h1 className="text-5xl font-bold text-white">HealthPass</h1>
        </div>
        <p className="text-violet-100 text-xl max-w-xl">
          Transform your travel experience with secure digital health
          verification
        </p>
      </div>

      {/* Main Login Card */}
      <Card className="w-full max-w-md shadow-2xl border-0 backdrop-blur-sm bg-white/95">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Welcome to HealthPass
          </CardTitle>
          <CardDescription className="text-center text-gray-600 text-lg">
            Your gateway to hassle-free international travel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Button
            className="w-full h-14 bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90 
                       flex items-center justify-center gap-3 text-lg font-medium shadow-lg
                       hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            onClick={handleDocuSignLogin}
            disabled={auth.loading}
          >
            {auth.loading && <Loader2 className="animate-spin" />}
            <UserCircle className="w-6 h-6" />
            Sign in with DocuSign
          </Button>

          {/* Features */}
          <div className="mt-10 space-y-6 px-2">
            <div className="flex items-start gap-4 group cursor-default">
              <Globe className="w-8 h-8 text-violet-500 mt-1 group-hover:text-violet-600 transition-colors" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  Smart Travel Documentation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant access to country-specific requirements and
                  receive verified QR codes for seamless immigration checks
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group cursor-default">
              <Shield className="w-8 h-8 text-violet-500 mt-1 group-hover:text-violet-600 transition-colors" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                  Secure Verification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Industry-leading security powered by DocuSign's trusted
                  authentication and encryption systems
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Alert className="bg-violet-50 border-violet-100">
            <AlertDescription className="text-sm text-gray-600 text-center">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-violet-600 hover:underline font-medium"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-violet-600 hover:underline font-medium"
              >
                Privacy Policy
              </a>
            </AlertDescription>
          </Alert>
        </CardFooter>
      </Card>

      {/* Footer Info */}
      <div className="mt-8 text-center space-y-2">
        <p className="text-violet-100">
          Need assistance?{" "}
          <a
            href="mailto:support@docusignhealthpass.com"
            className="text-white hover:underline font-medium"
          >
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
