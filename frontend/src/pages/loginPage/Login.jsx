import React, { useState, useEffect } from "react";
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
  const handleLoginForm = (e) => {
    e.preventDefault();

    if (!email || !password || !captchaInput) {
      setError("Please fill in all fields, including the CAPTCHA.");
      return;
    }

    if (captchaInput !== generatedCaptcha) {
      setError("Invalid CAPTCHA. Please try again.");
      return;
    }

    // For demonstration: Check if email/password is admin
    if (email === "admin@gmail.com" && password === "admin") {
      window.location.href = "/Dashboard";
    } else {
      setError("Invalid email or password.");
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
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg lg:w-5/12">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

          {error && (
            <p className="text-center text-red-500 text-sm mb-4">{error}</p>
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
                onInput={(e) => setEmail((e.target).value)}
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
                onInput={(e) =>
                  setPassword((e.target).value)
                }
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
                  onInput={(e) =>
                    setCaptchaInput((e.target).value)
                  }
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

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-white"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* Social Login Section (Optional) */}
          {/* <div className="mt-8 text-center">
            <p className="text-sm mb-4">Sign in with</p>
            <div className="flex justify-center space-x-4">
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="h-9 w-9 bg-blue-600 rounded-full text-white"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
              </TERipple>

              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="h-9 w-9 bg-blue-400 rounded-full text-white"
                >
                  <i className="fab fa-twitter"></i>
                </button>
              </TERipple>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
