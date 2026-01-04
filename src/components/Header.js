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

  const handleMenuClick = (path, section = null) => {
    setIsDropdownOpen(false);
    if (section) {
      // Navigate to account page with specific section
      router.push(`${path}?section=${section}`);
    } else {
      router.push(path);
    }
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
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1170px] items-center justify-between px-4 md:h-24">
        {/* Left: Brand */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-[20px] font-bold text-black md:text-[24px]">
              Exclusive
            </span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-12">
          <Link
            href="/"
            className="text-[14px] font-normal text-black transition-colors hover:text-[#DB4444] md:text-[16px]"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-[14px] font-normal text-black transition-colors hover:text-[#DB4444] md:text-[16px]"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-[14px] font-normal text-black transition-colors hover:text-[#DB4444] md:text-[16px]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[14px] font-normal text-black transition-colors hover:text-[#DB4444] md:text-[16px]"
          >
            Contact
          </Link>

        </nav>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-9 w-48 rounded bg-gray-100 pl-4 pr-10 text-[12px] text-black placeholder-gray-500 outline-none focus:ring-1 focus:ring-[#DB4444] md:h-10 md:w-60 md:text-[14px]"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image
                src="/assets/icons/search.png"
                alt="Search"
                width={18}
                height={18}
              />
            </button>
          </div>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative transition-transform hover:scale-110"
          >
            <Image
              src="/assets/icons/wishlist.png"
              alt="Wishlist"
              width={28}
              height={28}
              className="md:h-8 md:w-8"
            />
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative transition-transform hover:scale-110"
          >
            <Image
              src="/assets/icons/cart.png"
              alt="Cart"
              width={28}
              height={28}
              className="md:h-8 md:w-8"
            />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#DB4444] text-[10px] font-medium text-white">
              2
            </span>
          </Link>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleUserIconClick}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DB4444] transition-all hover:bg-red-600"
              aria-label="User menu"
            >
              <Image
                src="/assets/icons/user.png"
                alt="User"
                width={18}
                height={18}
                className="brightness-0 invert"
              />
            </button>

            {/* Dropdown Menu - Only show if user is logged in */}
            {user && isDropdownOpen && (
              <div className="absolute right-0 top-12 z-50 w-56 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl backdrop-blur-md">
                <div className="py-2">
                  <button
                    onClick={() => handleMenuClick("/account", "profile")}
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/user.png"
                      alt="Account"
                      width={20}
                      height={20}
                      className="brightness-0 invert"
                    />
                    <span>Manage My Account</span>
                  </button>

                  <button
                    onClick={() => handleMenuClick("/account", "orders")}
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/mallbag.png"
                      alt="Orders"
                      width={20}
                      height={20}
                      className="brightness-0 invert"
                    />
                    <span>My Orders</span>
                  </button>

                  <button
                    onClick={() => handleMenuClick("/account", "cancellations")}
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/cancel.png"
                      alt="Cancellations"
                      width={20}
                      height={20}
                      className="brightness-0 invert"
                    />
                    <span>My Cancellations</span>
                  </button>

                  <div className="my-1 border-t border-gray-600"></div>

                  <button
                    onClick={handleLogout}
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-[14px] text-white transition-colors hover:bg-white/10"
                  >
                    <Image
                      src="/assets/icons/logout.png"
                      alt="Logout"
                      width={20}
                      height={20}
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
