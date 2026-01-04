// @/components/CheckoutSection.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [couponCode, setCouponCode] = useState("");

  const cartItems = [
    {
      id: 1,
      image: "/assets/images/home/lcd.png",
      title: "LCD Monitor",
      price: 650,
    },
    {
      id: 2,
      image: "/assets/images/home/game.png",
      title: "H1 Gamepad",
      price: 1100,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = "Free";
  const total = subtotal;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleApplyCoupon = () => {
    console.log("Applying coupon:", couponCode);
  };

  const handlePlaceOrder = () => {
    console.log("Placing order...", formData);
  };

  return (
    <div className="mx-auto max-w-[1170px] px-4 py-8 md:py-16">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-[14px]">
        <Link href="/" className="text-gray-500 hover:text-black">
          Account
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="/" className="text-gray-500 hover:text-black">
          My Account
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="/" className="text-gray-500 hover:text-black">
          Product
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="/cart" className="text-gray-500 hover:text-black">
          View Cart
        </Link>
        <span className="text-gray-500">/</span>
        <span className="text-black">CheckOut</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        {/* Left Side - Billing Details Form */}
        <div className="flex-1">
          <h2 className="mb-8 text-[28px] font-medium text-black md:text-[36px]">
            Billing Details
          </h2>

          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label className="mb-2 block text-[14px] text-gray-600 md:text-[16px]">
                First Name<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full rounded bg-gray-100 px-4 py-3 text-[14px] text-black outline-none focus:bg-gray-200 md:text-[16px]"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="mb-2 block text-[14px] text-gray-600 md:text-[16px]">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full rounded bg-gray-100 px-4 py-3 text-[14px] text-black outline-none focus:bg-gray-200 md:text-[16px]"
              />
            </div>

            {/* Street Address */}
            <div>
              <label className="mb-2 block text-[14px] text-gray-600 md:text-[16px]">
                Street Address<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full rounded bg-gray-100 px-4 py-3 text-[14px] text-black outline-none focus:bg-gray-200 md:text-[16px]"
                required
              />
            </div>

            {/* Apartment */}
            <div>
              <label className="mb-2 block text-[14px] text-gray-600 md:text-[16px]">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="w-full rounded bg-gray-100 px-4 py-3 text-[14px] text-black outline-none focus:bg-gray-200 md:text-[16px]"
              />
            </div>

            {/* Town/City */}
            <div>
              <label className="mb-2 block text-[14px] text-gray-600 md:text-[16px]">
                Town/City<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full rounded bg-gray-100 px-4 py-3 text-[14px] text-black outline-none focus:bg-gray-200 md:text-[16px]"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="mb-2 block text-[14px] text-gray-600 md:text-[16px]">
                Phone Number<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded bg-gray-100 px-4 py-3 text-[14px] text-black outline-none focus:bg-gray-200 md:text-[16px]"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="mb-2 block text-[14px] text-gray-600 md:text-[16px]">
                Email Address<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded bg-gray-100 px-4 py-3 text-[14px] text-black outline-none focus:bg-gray-200 md:text-[16px]"
                required
              />
            </div>

            {/* Save Info Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="saveInfo"
                id="saveInfo"
                checked={formData.saveInfo}
                onChange={handleInputChange}
                className="h-5 w-5 accent-[#DB4444]"
              />
              <label
                htmlFor="saveInfo"
                className="text-[14px] text-black md:text-[16px]"
              >
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-[527px]">
          {/* Product List */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-[54px] w-[54px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[14px] text-black md:text-[16px]">
                    {item.title}
                  </span>
                </div>
                <span className="text-[14px] text-black md:text-[16px]">
                  ${item.price}
                </span>
              </div>
            ))}

            {/* Subtotal */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-4">
              <span className="text-[14px] text-black md:text-[16px]">
                Subtotal:
              </span>
              <span className="text-[14px] text-black md:text-[16px]">
                ${subtotal}
              </span>
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-4">
              <span className="text-[14px] text-black md:text-[16px]">
                Shipping:
              </span>
              <span className="text-[14px] text-black md:text-[16px]">
                {shipping}
              </span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pb-4">
              <span className="text-[14px] text-black md:text-[16px]">
                Total:
              </span>
              <span className="text-[14px] font-medium text-black md:text-[16px]">
                ${total}
              </span>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              {/* Bank Payment */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-5 w-5 accent-black"
                  />
                  <label
                    htmlFor="bank"
                    className="text-[14px] text-black md:text-[16px]"
                  >
                    Bank
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/home/visa.png"
                    alt="Visa"
                    width={42}
                    height={28}
                  />
                  <Image
                    src="/assets/images/home/mastercard.png"
                    alt="Mastercard"
                    width={42}
                    height={28}
                  />
                </div>
              </div>

              {/* Cash on Delivery */}
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-5 w-5 accent-black"
                />
                <label
                  htmlFor="cod"
                  className="text-[14px] text-black md:text-[16px]"
                >
                  Cash on delivery
                </label>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 rounded border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#DB4444] md:text-[16px]"
              />
              <button
                onClick={handleApplyCoupon}
                className="rounded bg-[#DB4444] px-8 py-3 text-[14px] font-medium text-white transition-colors hover:bg-red-600 md:px-12 md:text-[16px]"
              >
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full rounded bg-[#DB4444] px-12 py-4 text-[14px] font-medium text-white transition-colors hover:bg-red-600 md:text-[16px]"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
