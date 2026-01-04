"use client";

import Image from "next/image";
import Link from "next/link";

export default function NewArrival() {
  return (
    <section className="mx-auto max-w-292.5 px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-8 w-4 rounded bg-[#DB4444] md:h-10 md:w-5"></span>
          <span className="text-[14px] font-semibold text-[#DB4444]">
            Featured
          </span>
        </div>
        <h2 className="text-[28px] font-semibold text-black md:text-[36px]">
          New Arrival
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* LEFT — PS5 */}
        <Link
          href="#"
          aria-label="PlayStation 5"
          className="group relative h-[500px] overflow-hidden rounded bg-black"
        >
          <Image
            src="/assets/images/home/ps5-new.png"
            alt="PlayStation 5"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-8 left-8 max-w-xs text-white">
            <h3 className="mb-2 text-[24px] font-semibold">PlayStation 5</h3>
            <p className="mb-3 text-[14px] text-gray-200">
              Black and White version of the PS5 coming out on sale.
            </p>
            <span className="text-[14px] font-medium underline underline-offset-4">
              Shop Now
            </span>
          </div>
        </Link>

        {/* RIGHT */}
        <div className="grid gap-6">
          {/* Women */}
          <Link
            href="#"
            aria-label="Women’s Collections"
            className="group relative h-[235px] overflow-hidden rounded bg-black"
          >
            <Image
              src="/assets/images/home/women-new.png"
              alt="Women’s Collections"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 max-w-xs text-white">
              <h3 className="mb-1 text-[20px] font-semibold">
                Women’s Collections
              </h3>
              <p className="mb-2 text-[14px] text-gray-200">
                Featured woman collections that give you another vibe.
              </p>
              <span className="text-[14px] font-medium underline underline-offset-4">
                Shop Now
              </span>
            </div>
          </Link>

          {/* Bottom small cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Speakers */}
            <Link
              href="#"
              aria-label="Speakers"
              className="group relative h-[235px] overflow-hidden rounded bg-black"
            >
              <Image
                src="/assets/images/home/speaker-new.png"
                alt="Speakers"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="mb-1 text-[20px] font-semibold">Speakers</h3>
                <p className="mb-2 text-[14px] text-gray-200">
                  Amazon wireless speakers
                </p>
                <span className="text-[14px] font-medium underline underline-offset-4">
                  Shop Now
                </span>
              </div>
            </Link>

            {/* Perfume */}
            <Link
              href="#"
              aria-label="Perfume"
              className="group relative h-[235px] overflow-hidden rounded bg-black"
            >
              <Image
                src="/assets/images/home/perfume-new.png"
                alt="Perfume"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="mb-1 text-[20px] font-semibold">Perfume</h3>
                <p className="mb-2 text-[14px] text-gray-200">
                  GUCCI INTENSE OUD EDP
                </p>
                <span className="text-[14px] font-medium underline underline-offset-4">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
