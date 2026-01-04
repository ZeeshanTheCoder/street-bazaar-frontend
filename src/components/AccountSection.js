// @/components/AccountSection.js
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";

export default function AccountSection() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");
  
  // Set initial active section based on URL parameter or default to profile
  const [activeSection, setActiveSection] = useState(sectionParam || "profile");

  // Update active section when URL parameter changes
  useEffect(() => {
    if (sectionParam) {
      setActiveSection(sectionParam);
    }
  }, [sectionParam]);

  const [profileData, setProfileData] = useState({
    firstName: user?.name?.split(" ")[0] || "Md",
    lastName: user?.name?.split(" ")[1] || "Rimel",
    email: user?.email || "rimel111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", profileData);
    alert("Profile updated successfully!");
    // Add your save logic here
  };

  const handleCancel = () => {
    // Reset to original values
    setProfileData({
      firstName: user?.name?.split(" ")[0] || "Md",
      lastName: user?.name?.split(" ")[1] || "Rimel",
      email: user?.email || "rimel111@gmail.com",
      address: "Kingston, 5236, United State",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1170px] px-4 py-8 md:py-16">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] md:text-[14px]">
            <Link href="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-black">My Account</span>
          </div>

          {/* Welcome Message */}
          <div className="text-[14px] md:text-[16px]">
            Welcome!{" "}
            <span className="font-medium text-[#DB4444]">
              {user?.name || "Md Rimel"}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Left Sidebar */}
          <div className="w-full lg:w-[250px]">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="space-y-6">
                {/* Manage My Account */}
                <div>
                  <h3 className="mb-3 text-[16px] font-semibold text-black">
                    Manage My Account
                  </h3>
                  <div className="ml-4 space-y-2">
                    <button
                      onClick={() => setActiveSection("profile")}
                      className={`block w-full text-left text-[14px] transition-colors ${
                        activeSection === "profile"
                          ? "font-medium text-[#DB4444]"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => setActiveSection("addressBook")}
                      className={`block w-full text-left text-[14px] transition-colors ${
                        activeSection === "addressBook"
                          ? "font-medium text-[#DB4444]"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      Address Book
                    </button>
                    <button
                      onClick={() => setActiveSection("paymentOptions")}
                      className={`block w-full text-left text-[14px] transition-colors ${
                        activeSection === "paymentOptions"
                          ? "font-medium text-[#DB4444]"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      My Payment Options
                    </button>
                  </div>
                </div>

                {/* My Orders */}
                <div>
                  <h3 className="mb-3 text-[16px] font-semibold text-black">
                    My Orders
                  </h3>
                  <div className="ml-4 space-y-2">
                    <button
                      onClick={() => setActiveSection("orders")}
                      className={`block w-full text-left text-[14px] transition-colors ${
                        activeSection === "orders"
                          ? "font-medium text-[#DB4444]"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      My Orders
                    </button>
                    <button
                      onClick={() => setActiveSection("returns")}
                      className={`block w-full text-left text-[14px] transition-colors ${
                        activeSection === "returns"
                          ? "font-medium text-[#DB4444]"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      My Returns
                    </button>
                    <button
                      onClick={() => setActiveSection("cancellations")}
                      className={`block w-full text-left text-[14px] transition-colors ${
                        activeSection === "cancellations"
                          ? "font-medium text-[#DB4444]"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      My Cancellations
                    </button>
                  </div>
                </div>

                {/* My Wishlist */}
                <div>
                  <Link
                    href="/wishlist"
                    className="block text-[16px] font-semibold text-black transition-colors hover:text-[#DB4444]"
                  >
                    My Wishlist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            {/* My Profile Section */}
            {activeSection === "profile" && (
              <div className="rounded-lg bg-white p-6 shadow-sm md:p-10">
                <h2 className="mb-6 text-[18px] font-medium text-[#DB4444] md:text-[20px]">
                  Edit Your Profile
                </h2>

                <div className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-gray-700 md:text-[14px]">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-[14px] text-black outline-none transition-colors focus:border-[#DB4444] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-gray-700 md:text-[14px]">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-[14px] text-black outline-none transition-colors focus:border-[#DB4444] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Email & Address */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-gray-700 md:text-[14px]">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-[14px] text-black outline-none transition-colors focus:border-[#DB4444] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-gray-700 md:text-[14px]">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={profileData.address}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-[14px] text-black outline-none transition-colors focus:border-[#DB4444] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Password Changes */}
                  <div>
                    <label className="mb-3 block text-[13px] font-medium text-gray-700 md:text-[14px]">
                      Password Changes
                    </label>
                    <div className="space-y-4">
                      <input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        value={profileData.currentPassword}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-[14px] text-black placeholder-gray-500 outline-none transition-colors focus:border-[#DB4444] focus:bg-white"
                      />
                      <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={profileData.newPassword}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-[14px] text-black placeholder-gray-500 outline-none transition-colors focus:border-[#DB4444] focus:bg-white"
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                        value={profileData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-[14px] text-black placeholder-gray-500 outline-none transition-colors focus:border-[#DB4444] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-end">
                    <button
                      onClick={handleCancel}
                      className="rounded-md border border-gray-300 px-8 py-3 text-[14px] font-medium text-gray-700 transition-colors hover:bg-gray-50 md:text-[16px]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveChanges}
                      className="rounded-md bg-[#DB4444] px-8 py-3 text-[14px] font-medium text-white transition-colors hover:bg-red-600 md:px-12 md:text-[16px]"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Address Book Section */}
            {activeSection === "addressBook" && (
              <div className="rounded-lg bg-white p-6 shadow-sm md:p-10">
                <h2 className="mb-6 text-[18px] font-medium text-[#DB4444] md:text-[20px]">
                  Address Book
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-5 transition-colors hover:border-[#DB4444]">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-[16px] font-semibold text-black">
                        Home Address
                      </h3>
                      <button className="text-[14px] font-medium text-[#DB4444] transition-colors hover:underline">
                        Edit
                      </button>
                    </div>
                    <p className="text-[14px] text-gray-600">
                      Kingston, 5236, United State
                    </p>
                    <p className="mt-1 text-[14px] text-gray-600">
                      Phone: +1234567890
                    </p>
                  </div>
                  <button className="w-full rounded-lg border-2 border-dashed border-gray-300 py-6 text-[14px] font-medium text-gray-600 transition-all hover:border-[#DB4444] hover:bg-red-50 hover:text-[#DB4444]">
                    + Add New Address
                  </button>
                </div>
              </div>
            )}

            {/* Payment Options Section */}
            {activeSection === "paymentOptions" && (
              <div className="rounded-lg bg-white p-6 shadow-sm md:p-10">
                <h2 className="mb-6 text-[18px] font-medium text-[#DB4444] md:text-[20px]">
                  My Payment Options
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-5 transition-colors hover:border-[#DB4444]">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-[16px] font-semibold text-black">
                          •••• •••• •••• 1234
                        </div>
                      </div>
                      <button className="text-[14px] font-medium text-[#DB4444] transition-colors hover:underline">
                        Remove
                      </button>
                    </div>
                    <p className="text-[14px] text-gray-600">
                      Expires: 12/2025
                    </p>
                  </div>
                  <button className="w-full rounded-lg border-2 border-dashed border-gray-300 py-6 text-[14px] font-medium text-gray-600 transition-all hover:border-[#DB4444] hover:bg-red-50 hover:text-[#DB4444]">
                    + Add New Card
                  </button>
                </div>
              </div>
            )}

            {/* My Orders Section */}
            {activeSection === "orders" && (
              <div className="rounded-lg bg-white p-6 shadow-sm md:p-10">
                <h2 className="mb-6 text-[18px] font-medium text-[#DB4444] md:text-[20px]">
                  My Orders
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-5 transition-colors hover:border-[#DB4444]">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-[16px] font-semibold text-black">
                        Order #12347
                      </h3>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-[12px] font-medium text-green-800">
                        Delivered
                      </span>
                    </div>
                    <p className="text-[14px] text-gray-600">
                      LCD Monitor - Delivered on Jan 5, 2025
                    </p>
                    <p className="mt-2 text-[14px] font-medium text-black">
                      Total: $650
                    </p>
                  </div>
                  <p className="text-center text-[14px] text-gray-500">
                    No more orders to display
                  </p>
                </div>
              </div>
            )}

            {/* My Returns Section */}
            {activeSection === "returns" && (
              <div className="rounded-lg bg-white p-6 shadow-sm md:p-10">
                <h2 className="mb-6 text-[18px] font-medium text-[#DB4444] md:text-[20px]">
                  My Returns
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-5 transition-colors hover:border-[#DB4444]">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-[16px] font-semibold text-black">
                        Order #12345
                      </h3>
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-[12px] font-medium text-yellow-800">
                        Pending
                      </span>
                    </div>
                    <p className="text-[14px] text-gray-600">
                      LCD Monitor - Return requested on Jan 1, 2025
                    </p>
                    <p className="mt-2 text-[14px] text-gray-600">
                      Reason: Product defective
                    </p>
                  </div>
                  <p className="text-center text-[14px] text-gray-500">
                    No more returns to display
                  </p>
                </div>
              </div>
            )}

            {/* My Cancellations Section */}
            {activeSection === "cancellations" && (
              <div className="rounded-lg bg-white p-6 shadow-sm md:p-10">
                <h2 className="mb-6 text-[18px] font-medium text-[#DB4444] md:text-[20px]">
                  My Cancellations
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-5 transition-colors hover:border-[#DB4444]">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-[16px] font-semibold text-black">
                        Order #12346
                      </h3>
                      <span className="rounded-full bg-red-100 px-3 py-1 text-[12px] font-medium text-red-800">
                        Cancelled
                      </span>
                    </div>
                    <p className="text-[14px] text-gray-600">
                      H1 Gamepad - Cancelled on Dec 28, 2024
                    </p>
                    <p className="mt-2 text-[14px] text-gray-600">
                      Refund: $550 (Processing)
                    </p>
                  </div>
                  <p className="text-center text-[14px] text-gray-500">
                    No more cancellations to display
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}