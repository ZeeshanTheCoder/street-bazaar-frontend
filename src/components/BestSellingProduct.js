// @/components/BestSellingProduct.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function BestSellingProduct() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const products = [
    {
      discount: "-40%",
      image: "/assets/images/home/game.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      old: "$160",
      reviews: 88,
      rating: 3,
    },
    {
      discount: "-35%",
      image: "/assets/images/home/keyboard.png",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      old: "$1160",
      reviews: 75,
      rating: 5,
    },
    {
      discount: "-30%",
      image: "/assets/images/home/lcd.png",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      old: "$400",
      reviews: 99,
      rating: 4,
    },
    {
      discount: "-25%",
      image: "/assets/images/home/chair.png",
      title: "S-Series Comfort Chair",
      price: "$375",
      old: "$400",
      reviews: 99,
      rating: 2,
    },
    {
      discount: "-40%",
      image: "/assets/images/home/game.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      old: "$160",
      reviews: 88,
      rating: 3,
    },
    {
      discount: "-35%",
      image: "/assets/images/home/keyboard.png",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      old: "$1160",
      reviews: 75,
      rating: 5,
    },
    {
      discount: "-30%",
      image: "/assets/images/home/lcd.png",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      old: "$400",
      reviews: 99,
      rating: 4,
    },
    {
      discount: "-25%",
      image: "/assets/images/home/chair.png",
      title: "S-Series Comfort Chair",
      price: "$375",
      old: "$400",
      reviews: 99,
      rating: 2,
    },
  ];

  const CARD_WIDTH = 270 + 24; // card width + gap

  // Determine visible cards count based on container width
  const getVisibleCards = () => {
    if (!containerRef.current) return 1;
    const containerWidth = containerRef.current.offsetWidth;
    return Math.floor(containerWidth / CARD_WIDTH) || 1;
  };

  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    function handleResize() {
      setVisibleCards(getVisibleCards());
      // Reset index if out of bounds
      setCurrentIndex((prev) =>
        prev > products.length - getVisibleCards()
          ? Math.max(products.length - getVisibleCards(), 0)
          : prev
      );
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products.length]);

  const maxIndex = Math.max(products.length - visibleCards, 0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  return (
    <section className="mx-auto max-w-292.5 py-16 px-4">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-20">
          <div>
            <div className="mb-2 flex items-center gap-2">
            <span className="h-8 w-4 rounded bg-[#DB4444] md:h-10 md:w-5"></span>
              <span className="text-[14px] font-semibold text-[#DB4444]">
                This Month
              </span>
            </div>
            <h2 className="text-[28px] font-semibold text-black md:text-[36px]">
              Best Selling Products{" "}
            </h2>
          </div>

        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <Image
              src="/assets/icons/left-icon.png"
              alt="Prev"
              width={16}
              height={16}
            />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            disabled={currentIndex === maxIndex}
          >
            <Image
              src="/assets/icons/right-icon.png"
              alt="Next"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      {/* Products */}
      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * CARD_WIDTH}px)` }}
        >
          {products.map((p, i) => (
            <div key={i} className="group relative w-[270px] flex-shrink-0">
              <div className="relative flex h-[250px] items-center justify-center bg-gray-100">
                <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-2 py-1 text-[12px] text-white">
                  {p.discount}
                </span>

                <div className="absolute right-3 top-3 flex flex-col gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <Image
                      src="/assets/icons/wishlist.png"
                      alt="Wishlist"
                      width={20}
                      height={20}
                    />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <Image
                      src="/assets/icons/view.png"
                      alt="View"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>

                <Image src={p.image} alt={p.title} width={190} height={180} />

                <button className="absolute bottom-0 left-0 right-0 hidden h-10 items-center justify-center bg-black text-[14px] text-white group-hover:flex">
                  Add To Cart
                </button>
              </div>

              <h3 className="mt-4 text-[16px] text-black">{p.title}</h3>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-[16px] font-semibold text-[#DB4444]">
                  {p.price}
                </span>
                <span className="text-[14px] text-gray-400 line-through">
                  {p.old}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Image
                    key={idx}
                    src={
                      idx < p.rating
                        ? "/assets/icons/yellow-star.png"
                        : "/assets/icons/star.png"
                    }
                    alt="Star"
                    width={16}
                    height={16}
                  />
                ))}
                <span className="ml-1 text-[14px] text-gray-500">
                  ({p.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <Link href="/shop" className="rounded bg-[#DB4444] px-12 py-4 text-[16px] text-white">
          View All Products
        </Link>
      </div>
    </section>
  );
}
