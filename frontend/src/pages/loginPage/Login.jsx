import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticate } from "@/app/slice/AuthenticateSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    captchaInput: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
 const isAuth =useSelector(state=>state.authenticate);


  const generateCaptcha = () => {
    const randomCaptcha = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();
    setCaptcha(randomCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();

    const { email, password, captchaInput } = formData;
    if (!email || !password || !captchaInput) {
      setError("All fields are required, including the CAPTCHA.");
      return;
    }

    if (captchaInput !== captcha) {
      setError("Invalid CAPTCHA. Please try again.");
      generateCaptcha();
      return;
    }

    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/mca/login", {
        email,
        password,
      });
      const { accessToken, refreshToken, message } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/overview");
      dispatch(isAuthenticate());
      console.log("login",isAuth);

    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/overview"); 
  }, [navigate]);

  return (
    <section className="h-screen">
      <div className="h-full flex items-center justify-center lg:flex-row flex-col">
        <div className="lg:w-6/12 hidden lg:flex">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login Illustration"
            className="w-full"
          />
        </div>
        <div className="w-full max-w-md p-5 lg:w-5/12">
          <h1 className="text-2xl font-bold text-blue-500 text-center mb-4">
            WELCOME TO MCA
          </h1>
          <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
          {error && (
            <p className="text-center text-red-500 text-sm mb-4">{error}</p>
          )}
          <form onSubmit={handleLoginForm}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
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
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="captchaInput"
                className="block mb-2 text-sm font-medium"
              >
                Enter the CAPTCHA
              </label>
              <div className="flex items-center space-x-2">
                <Input
                  id="captchaInput"
                  type="text"
                  placeholder="Enter CAPTCHA"
                  value={formData.captchaInput}
                  onChange={handleInputChange}
                  required
                />
                <span className="bg-gray-200 px-4 py-2 rounded font-mono text-lg">
                  {captcha}
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
              className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-2 px-4 rounded" 
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <NavLink
            to="/signup"
            className="block text-center mt-4 text-sm text-gray-400 dark:text-gray-200 hover:underline" 
          >
            Don't have an account?
            <span className="text-blue-500"> Register</span>
          </NavLink>
        </div>
      </div>
    </section>
    // <>
    // {
    //   localStorage.getItem("accessToken") ? (
    //     navigate("/overview")
    //   ) : (
    //     <section className="h-screen">
    //   <div className="h-full flex items-center justify-center lg:flex-row flex-col">
    //     <div className="lg:w-6/12 hidden lg:flex">
    //       <img
    //         src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
    //         alt="Login Illustration"
    //         className="w-full"
    //       />
    //     </div>
    //     <div className="w-full max-w-md p-5 lg:w-5/12">
    //       <h1 className="text-2xl font-bold text-blue-500 text-center mb-4">
    //         WELCOME TO MCA
    //       </h1>
    //       <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
    //       {error && (
    //         <p className="text-center text-red-500 text-sm mb-4">{error}</p>
    //       )}
    //       <form onSubmit={handleLoginForm}>
    //         <div className="mb-6">
    //           <label htmlFor="email" className="block mb-2 text-sm font-medium">
    //             Email
    //           </label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="Enter your email"
    //             value={formData.email}
    //             onChange={handleInputChange}
    //             required
    //           />
    //         </div>
    //         <div className="mb-6">
    //           <label
    //             htmlFor="password"
    //             className="block mb-2 text-sm font-medium"
    //           >
    //             Password
    //           </label>
    //           <Input
    //             id="password"
    //             type="password"
    //             placeholder="Enter your password"
    //             value={formData.password}
    //             onChange={handleInputChange}
    //             required
    //           />
    //         </div>
    //         <div className="mb-6">
    //           <label
    //             htmlFor="captchaInput"
    //             className="block mb-2 text-sm font-medium"
    //           >
    //             Enter the CAPTCHA
    //           </label>
    //           <div className="flex items-center space-x-2">
    //             <Input
    //               id="captchaInput"
    //               type="text"
    //               placeholder="Enter CAPTCHA"
    //               value={formData.captchaInput}
    //               onChange={handleInputChange}
    //               required
    //             />
    //             <span className="bg-gray-200 px-4 py-2 rounded font-mono text-lg">
    //               {captcha}
    //             </span>
    //             <Button
    //               type="button"
    //               onClick={generateCaptcha}
    //               className="text-sm"
    //             >
    //               Refresh
    //             </Button>
    //           </div>
    //         </div>
    //         <Button
    //           type="submit"
    //           className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-2 px-4 rounded" 
    //           disabled={isLoading}
    //         >
    //           {isLoading ? "Logging in..." : "Login"}
    //         </Button>
    //       </form>
    //       <NavLink
    //         to="/signup"
    //         className="block text-center mt-4 text-sm text-gray-400 dark:text-gray-200 hover:underline" 
    //       >
    //         Don't have an account?
    //         <span className="text-blue-500"> Register</span>
    //       </NavLink>
    //     </div>
    //   </div>
    // </section>
    //   )
    // }
    // </>
  )
}

export default Login;
