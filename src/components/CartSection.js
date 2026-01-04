// @/components/CartSection.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartSection() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/assets/images/home/lcd.png",
      title: "LCD Monitor",
      price: 650,
      quantity: 1,
    },
    {
      id: 2,
      image: "/assets/images/home/game.png",
      title: "H1 Gamepad",
      price: 550,
      quantity: 2,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setItemToDelete(null);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = "Free";
  const total = subtotal;

  const handleApplyCoupon = () => {
    console.log("Applying coupon:", couponCode);
    // Add coupon logic here
  };

  return (
    <div className="mx-auto max-w-[1170px] px-4 py-8 md:py-16">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-[14px]">
        <Link href="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <span className="text-gray-500">/</span>
        <span className="text-black">Cart</span>
      </div>

      {/* Cart Table */}
      <div className="mb-6 overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 rounded border border-gray-200 bg-white px-6 py-4 shadow-sm">
            <div className="text-[16px] font-normal text-black">Product</div>
            <div className="text-center text-[16px] font-normal text-black">
              Price
            </div>
            <div className="text-center text-[16px] font-normal text-black">
              Quantity
            </div>
            <div className="text-center text-[16px] font-normal text-black">
              Subtotal
            </div>
            <div className="text-center text-[16px] font-normal text-black">
              Action
            </div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="mt-4 grid grid-cols-5 items-center gap-4 rounded border border-gray-200 bg-white px-6 py-4 shadow-sm"
            >
              {/* Product */}
              <div className="flex items-center gap-4">
                <div className="relative h-[50px] w-[50px]">
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

              {/* Price */}
              <div className="text-center text-[14px] text-black md:text-[16px]">
                ${item.price}
              </div>

              {/* Quantity */}
              <div className="flex justify-center">
                <div className="flex w-[72px] items-center justify-between rounded border border-gray-300 px-2 py-1.5">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-8 text-center text-[14px] outline-none"
                    min="1"
                  />
                  <div className="flex flex-col">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="text-[10px] leading-none hover:text-[#DB4444]"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="text-[10px] leading-none hover:text-[#DB4444]"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtotal */}
              <div className="text-center text-[14px] font-medium text-black md:text-[16px]">
                ${item.price * item.quantity}
              </div>

              {/* Delete Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DB4444] text-white transition-colors hover:bg-red-600"
                  aria-label="Delete item"
                >
                  <Image
                    src="/assets/icons/delete.png"
                    alt="Delete"
                    width={18}
                    height={18}
                    className="brightness-0 invert"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
        <Link href="/">
          <button className="rounded border border-gray-300 px-8 py-3 text-[14px] font-medium text-black transition-colors hover:bg-gray-50 md:px-12 md:py-4 md:text-[16px]">
            Return To Shop
          </button>
        </Link>
        <button className="rounded border border-gray-300 px-8 py-3 text-[14px] font-medium text-black transition-colors hover:bg-gray-50 md:px-12 md:py-4 md:text-[16px]">
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total */}
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        {/* Coupon Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-full rounded border border-gray-300 px-6 py-3 text-[14px] outline-none focus:border-[#DB4444] sm:w-[300px] md:text-[16px]"
          />
          <button
            onClick={handleApplyCoupon}
            className="rounded bg-[#DB4444] px-8 py-3 text-[14px] font-medium text-white transition-colors hover:bg-red-600 md:px-12 md:py-4 md:text-[16px]"
          >
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="w-full rounded border-2 border-black p-6 lg:w-[470px]">
          <h3 className="mb-6 text-[18px] font-medium text-black md:text-[20px]">
            Cart Total
          </h3>

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
          <div className="flex items-center justify-between border-b border-gray-300 py-4">
            <span className="text-[14px] text-black md:text-[16px]">
              Shipping:
            </span>
            <span className="text-[14px] text-black md:text-[16px]">
              {shipping}
            </span>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between py-4">
            <span className="text-[14px] text-black md:text-[16px]">
              Total:
            </span>
            <span className="text-[14px] font-medium text-black md:text-[16px]">
              ${total}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="mt-4 flex justify-center">
            <Link href="/checkout" className="w-full">
              <button className="w-full rounded bg-[#DB4444] px-8 py-3 text-[14px] font-medium text-white transition-colors hover:bg-red-600 md:py-4 md:text-[16px]">
                Procees to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}