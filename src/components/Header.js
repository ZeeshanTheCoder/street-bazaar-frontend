// @/components/Header.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const { user, logout } = useAuth();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (path) => {
    setIsDropdownOpen(false);
    router.push(path);
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    logout();
  };

  const handleUserIconClick = () => {
    if (user) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto flex h-22 max-w-292.5 items-center justify-between px-4">
        {/* Left: Brand */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-[24px] font-bold text-black">Exclusive</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          <Link href="/" className="text-[16px] font-normal text-black">
            Home
          </Link>
          <Link href="/contact" className="text-[16px] font-normal text-black">
            Contact
          </Link>
          <Link href="/about" className="text-[16px] font-normal text-black">
            About
          </Link>
          {!user && (
            <Link href="/signup" className="text-[16px] font-normal text-black">
              Sign Up
            </Link>
          )}
        </nav>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-9.5 w-60.75 rounded-md bg-gray-100 pl-4 pr-10 text-[14px] text-black placeholder-gray-500 focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image
                src="/assets/icons/search.png"
                alt="Search"
                width={20}
                height={20}
              />
            </div>
          </div>

          <button onClick={() => handleMenuClick("/wishlist")} className="relative">
            <Image
              src="/assets/icons/wishlist.png"
              alt="Wishlist"
              width={32}
              height={32}
            />
          </button>

          <button className="relative">
            <Image
              src="/assets/icons/cart.png"
              alt="Cart"
              width={32}
              height={32}
            />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              2
            </span>
          </button>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleUserIconClick}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DB4444] transition-all hover:bg-red-600"
            >
              <Image
                src="/assets/icons/user.png"
                alt="User"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
            </button>

            {/* Dropdown Menu - Only show if user is logged in */}
            {user && isDropdownOpen && (
              <div className="absolute right-0 top-12 z-50 w-56 rounded-md bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg backdrop-blur-md">
                <div className="py-2">
                  <button
                    onClick={() => handleMenuClick("/")}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/user.png"
                      alt="Account"
                      width={24}
                      height={24}
                      className="brightness-0 invert"
                    />
                    <span>Manage My Account</span>
                  </button>

                  <button
                    onClick={() => handleMenuClick("/")}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/mallbag.png"
                      alt="Order"
                      width={24}
                      height={24}
                      className="brightness-0 invert"
                    />
                    <span>My Order</span>
                  </button>

                  <button
                    onClick={() => handleMenuClick("/")}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/cancel.png"
                      alt="Cancellations"
                      width={24}
                      height={24}
                      className="brightness-0 invert"
                    />
                    <span>My Cancellations</span>
                  </button>

                  <button
                    onClick={() => handleMenuClick("/")}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/reviews.png"
                      alt="Reviews"
                      width={24}
                      height={24}
                      className="brightness-0 invert"
                    />
                    <span>My Reviews</span>
                  </button>

                  <div className="my-1 border-t border-gray-600"></div>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/logout.png"
                      alt="Logout"
                      width={24}
                      height={24}
                      className="brightness-0 invert"
                    />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
