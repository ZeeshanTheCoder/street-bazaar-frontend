// @/components/WishlistSection.js
"use client";

import Image from "next/image";
import { useState } from "react";

export default function WishlistSection() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      discount: "-35%",
      image: "/assets/images/home/game.png",
      title: "Gucci duffle bag",
      price: "$960",
      old: "$1160",
    },
    {
      image: "/assets/images/home/keyboard.png",
      title: "RGB liquid CPU Cooler",
      price: "$1960",
    },
    {
      image: "/assets/images/home/lcd.png",
      title: "GP11 Shooter USB Gamepad",
      price: "$660",
    },
    {
      image: "/assets/images/home/chair.png",
      title: "Quilted Satin Jacket",
      price: "$660",
    },
  ]);

  const justForYouProducts = [
    {
      discount: "-35%",
      image: "/assets/images/home/game.png",
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      old: "$1160",
      reviews: 325,
      rating: 5,
    },
    {
      image: "/assets/images/home/lcd.png",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      old: "$400",
      reviews: 99,
      rating: 5,
    },
    {
      discount: "NEW",
      isNew: true,
      image: "/assets/images/home/keyboard.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      reviews: 88,
      rating: 5,
    },
    {
      image: "/assets/images/home/chair.png",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      reviews: 75,
      rating: 4,
    },
  ];

  const handleRemoveFromWishlist = (index) => {
    setWishlistItems(wishlistItems.filter((_, i) => i !== index));
  };

  const handleMoveAllToBag = () => {
    console.log("Moving all items to bag...");
    // Add your logic here
  };

  const handleAddToBag = (item) => {
    console.log("Adding to bag:", item);
    // Add your logic here
  };

  return (
    <div className="mx-auto max-w-[1170px] px-4 py-8 md:py-16">
      {/* Wishlist Section */}
      <div className="mb-12">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <h2 className="text-[18px] font-normal text-black md:text-[20px]">
            Wishlist ({wishlistItems.length})
          </h2>
          <button
            onClick={handleMoveAllToBag}
            className="rounded border border-gray-300 px-6 py-2.5 text-[14px] font-medium text-black transition-colors hover:bg-gray-50 md:px-12 md:py-4 md:text-[16px]"
          >
            Move All To Bag
          </button>
        </div>

        {/* Wishlist Products Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {wishlistItems.map((item, index) => (
            <div key={index} className="group relative w-full">
              <div className="relative flex h-[200px] items-center justify-center bg-gray-100 md:h-[250px]">
                {/* Discount Badge */}
                {item.discount && (
                  <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-2 py-1 text-[12px] text-white">
                    {item.discount}
                  </span>
                )}

                {/* Delete Icon */}
                <button
                  onClick={() => handleRemoveFromWishlist(index)}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200"
                >
                  <Image
                    src="/assets/icons/delete.png"
                    alt="Delete"
                    width={20}
                    height={20}
                  />
                </button>

                {/* Product Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="object-contain md:w-[180px]"
                />

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToBag(item)}
                  className="absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center gap-2 bg-black text-[14px] font-medium text-white transition-opacity md:text-[16px]"
                >
                  <Image
                    src="/assets/icons/cart-white.png"
                    alt="Cart"
                    width={24}
                    height={24}
                  />
                  Add To Cart
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-4">
                <h3 className="text-[14px] font-medium text-black md:text-[16px]">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-[14px] font-semibold text-[#DB4444] md:text-[16px]">
                    {item.price}
                  </span>
                  {item.old && (
                    <span className="text-[14px] text-gray-400 line-through md:text-[16px]">
                      {item.old}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Just For You Section */}
      <div>
        {/* Header */}
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <div className="flex items-center gap-4">
            <span className="h-8 w-4 rounded bg-[#DB4444] md:h-10 md:w-5"></span>
            <h2 className="text-[18px] font-normal text-black md:text-[20px]">
              Just For You
            </h2>
          </div>
          <button className="rounded border border-gray-300 px-6 py-2.5 text-[14px] font-medium text-black transition-colors hover:bg-gray-50 md:px-12 md:py-4 md:text-[16px]">
            See All
          </button>
        </div>

        {/* Just For You Products Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {justForYouProducts.map((product, index) => (
            <div key={index} className="group relative w-full">
              <div className="relative flex h-[200px] items-center justify-center bg-gray-100 md:h-[250px]">
                {/* Discount/New Badge */}
                {product.discount && (
                  <span
                    className={`absolute left-3 top-3 rounded px-2 py-1 text-[12px] text-white ${
                      product.isNew ? "bg-[#00FF66]" : "bg-[#DB4444]"
                    }`}
                  >
                    {product.discount}
                  </span>
                )}

                {/* Action Icons */}
                <div className="absolute right-3 top-3 flex flex-col gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200">
                    <Image
                      src="/assets/icons/wishlist.png"
                      alt="Wishlist"
                      width={20}
                      height={20}
                    />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-200">
                    <Image
                      src="/assets/icons/view.png"
                      alt="View"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>

                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="object-contain md:w-[180px]"
                />

                {/* Add to Cart Button - Always visible, no hover */}
                <button
                  onClick={() => handleAddToBag(product)}
                  className="absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center bg-black text-[14px] font-medium text-white md:text-[16px]"
                >
                  Add To Cart
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-4">
                <h3 className="text-[14px] font-medium text-black md:text-[16px]">
                  {product.title}
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-[14px] font-semibold text-[#DB4444] md:text-[16px]">
                    {product.price}
                  </span>
                  {product.old && (
                    <span className="text-[14px] text-gray-400 line-through md:text-[16px]">
                      {product.old}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Image
                      key={idx}
                      src={
                        idx < product.rating
                          ? "/assets/icons/yellow-star.png"
                          : "/assets/icons/star.png"
                      }
                      alt="Star"
                      width={14}
                      height={14}
                      className="md:h-4 md:w-4"
                    />
                  ))}
                  <span className="ml-1 text-[12px] text-gray-500 md:text-[14px]">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}