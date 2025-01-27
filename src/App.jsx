import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layouts/AuthLayout";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import useStore from "./store/useStore";
import { handleDocuSignAuthCode } from "./utils/oauth";
import Landing from "./components/Landing";
import axios from "axios";

function App() {
  const [searchParams] = useSearchParams();
  const { auth, login, user, setTokens, setAuthLoading, setBaseUri, setUser } =
    useStore();
  const code = searchParams.get("code");
  const isAuthenticated = user.isAuthenticated;
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      getTokens();
    }
  }, [code]);

  const getTokens = async () => {
    try {
      const authentication = await handleDocuSignAuthCode(
        code,
        auth.codeVerifier
      );
      setTokens(authentication.access_token, authentication.refresh_token);
      // Handle onboarding before login
      await getDocuSignUserInfo(authentication.access_token);
      // Only login after successful onboarding
      navigate("/");
      login();
      setAuthLoading(false);
    } catch (error) {
      console.error("Authentication error:", error);
      // Handle error appropriately
    }
  };

  const getDocuSignUserInfo = async (accessToken) => {
    const response = await axios.get(
      "https://account-d.docusign.com/oauth/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    setUser(response.data);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={!isAuthenticated ? <AuthLayout /> : <Landing />}
      />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
