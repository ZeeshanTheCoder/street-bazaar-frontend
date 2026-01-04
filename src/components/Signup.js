// @/app/components/Signup.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { signup } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData.name, formData.email, formData.password);
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
                Create an account
              </h1>
              <p className="text-sm text-black lg:text-base">
                Enter your details below
              </p>
            </div>

            {/* Form Container */}
            <div className="space-y-6 lg:space-y-8">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-sm text-black placeholder-gray-400 focus:border-[#DB4444] focus:outline-none lg:text-base"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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

              {/* Create Account Button */}
              <button
                onClick={handleSubmit}
                className="w-full rounded bg-[#DB4444] py-3.5 text-sm font-medium text-white transition-colors hover:bg-red-600 lg:py-4 lg:text-base"
              >
                Create Account
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600 lg:text-base">
                  Already have account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-black underline decoration-gray-400 underline-offset-4 transition-colors hover:text-[#DB4444]"
                  >
                    Log in
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