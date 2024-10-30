import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignupFormType = {
  fullName: string;
  email: string;
  password: string;
};

// Define validation schema using Yup
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const [tab, setTab] = useState("signup");

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Integrate Yup with React Hook Form
  });

  // Handle form submission
  const onSubmit = (data: SignupFormType) => {
    console.log(data);
  };

  return (
    <div className="bg-gradient-to-br from-black via-blue-500 to-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-2xl  transition-transform duration-300">
          <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="mt-2">Join our amazing community</p>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setTab("signup")}
                className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${
                  tab === "signup"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setTab("login")}
                className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${
                  tab === "login"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Login
              </button>
            </div>

            {tab === "signup" && (
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                  <input
                    type="text"
                    {...register("fullName")}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 text-black ${
                      errors.fullName ? "border-red-500" : ""
                    }`}
                    placeholder="Full Name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 text-black ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="password"
                    {...register("password")}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 text-black ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Sign Up
                </button>
              </form>
            )}

            {tab === "login" && (
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Email"
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Password"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
                  Login
                </button>
              </form>
            )}

            <div className="mt-6">
              <p className="text-center text-gray-600 mb-4">Or continue with</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  <i className="fab fa-facebook-f mr-2"></i> Facebook
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                  <i className="fab fa-google mr-2"></i> Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
