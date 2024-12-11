import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to generate a random CAPTCHA
  const generateCaptcha = () => {
    const captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCaptcha(captcha);
  };

  // Initialize CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle form submission
  const handleLoginForm = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password || !captchaInput) {
      setError("Please fill in all fields, including the CAPTCHA.");
      return;
    }

    if (captchaInput !== generatedCaptcha) {
      setError("Invalid CAPTCHA. Please try again.");
      return;
    }

    // Make API request to backend
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/mca/login", {
        email,
        password,
      });

      const { accessToken, refreshToken, message } = response.data;

      // Save tokens to local storage or cookies
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Redirect to dashboard
      alert(message);
      window.location.href = "/overview";
    } catch (err) {
      // Handle error response
      setError(
        err.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full flex items-center justify-center lg:flex-row flex-col">
        {/* Left Image Section */}
        <div className="lg:flex lg:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login Illustration"
            className="w-full"
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full max-w-md p-5 lg:w-5/12">
          <h1 className="text-2xl font-bold text-blue-500 text-center mb-4">WELCOME TO MCA</h1>
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

          {error && (
            <p className="text-center text-blue-500 text-sm mb-4">{error}</p>
          )}

          <form onSubmit={handleLoginForm}>
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* CAPTCHA */}
            <div className="mb-6">
              <label htmlFor="captcha" className="block mb-2 text-sm font-medium">
                Enter the CAPTCHA
              </label>
              <div className="flex items-center space-x-2">
                <Input
                  id="captcha"
                  type="text"
                  placeholder="Enter CAPTCHA"
                  value={captchaInput}
                  onInput={(e) => setCaptchaInput(e.target.value)}
                  required
                />
                <span className="bg-gray-200 px-4 py-2 rounded font-mono text-lg">
                  {generatedCaptcha}
                </span>
                <Button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-sm"
                >
                  Refresh
                </Button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-white"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
