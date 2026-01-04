// @/app/components/Login.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(formData.email, formData.password);
    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center lg:flex-row">
        {/* Left Side - Image */}
        <div className="hidden w-full lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:p-8">
          <div className="relative h-[400px] w-full max-w-[500px] lg:h-[600px]">
            <Image
              src="/assets/images/auth/auth.png"
              alt="Shopping cart with phone"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex w-full flex-col items-center justify-center px-6 py-12 lg:w-1/2 lg:px-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8 lg:mb-12">
              <h1 className="mb-4 text-3xl font-medium text-black lg:text-4xl">
                Log in to Exclusive
              </h1>
              <p className="text-sm text-black lg:text-base">
                Enter your details below
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Demo Credentials Info */}
            <div className="mb-6 rounded-md bg-blue-50 p-3 text-sm text-blue-600">
              <p className="font-medium">Demo Credentials:</p>
              <p>Email: user@example.com</p>
              <p>Password: password123</p>
            </div>

            {/* Form Container */}
            <div className="space-y-6 lg:space-y-8">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-sm text-black placeholder-gray-400 focus:border-[#DB4444] focus:outline-none lg:text-base"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-sm text-black placeholder-gray-400 focus:border-[#DB4444] focus:outline-none lg:text-base"
                  required
                />
              </div>

              {/* Login Button and Forgot Password */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handleSubmit}
                  className="rounded bg-[#DB4444] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-red-600 lg:px-12 lg:py-4 lg:text-base"
                >
                  Log In
                </button>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#DB4444] transition-colors hover:text-red-600 lg:text-base"
                >
                  Forget Password?
                </Link>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600 lg:text-base">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-black underline decoration-gray-400 underline-offset-4 transition-colors hover:text-[#DB4444]"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
