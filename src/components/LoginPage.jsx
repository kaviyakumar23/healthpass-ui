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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 flex flex-col items-center justify-center p-4">
      {/* Logo and Title */}
      <div className="mb-12 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-blue-950">
            DocuSign HealthPass
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          Your secure gateway to global health documentation
        </p>
      </div>

      {/* Main Login Card */}
      <Card className="w-full max-w-md shadow-xl border border-gray-100 backdrop-blur-sm bg-white/95">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl font-semibold text-center text-gray-800">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-gray-600 text-base">
            Access your health documents and travel requirements securely
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 
                       flex items-center justify-center gap-3 text-lg font-medium shadow-sm"
            onClick={handleDocuSignLogin}
            disabled={auth.loading}
          >
            {auth.loading && <Loader2 className="animate-spin" />}
            <UserCircle className="w-6 h-6" />
            Continue with DocuSign
          </Button>

          {/* Features */}
          <div className="mt-10 space-y-6 px-2">
            <div className="flex items-start gap-4 group cursor-default">
              <Globe className="w-6 h-6 text-blue-500 mt-1 group-hover:text-blue-600 transition-colors" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Global Health Document Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Store, manage, and access your health documents for
                  international travel from anywhere
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group cursor-default">
              <Shield className="w-6 h-6 text-blue-500 mt-1 group-hover:text-blue-600 transition-colors" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Enterprise-Grade Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Protected by DocuSign's world-class authentication and
                  encryption systems
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Alert className="bg-gray-50 border-gray-200">
            <AlertDescription className="text-sm text-gray-600 text-center">
              By continuing, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </AlertDescription>
          </Alert>
        </CardFooter>
      </Card>

      {/* Footer Info */}
      <div className="mt-8 text-center space-y-2">
        <p className="text-gray-600">
          Need help?{" "}
          <a
            href="mailto:support@docusignhealthpass.com"
            className="text-blue-600 hover:underline font-medium"
          >
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
