// @/components/HomeBanner.jsx
'use client';

import Image from 'next/image';

export default function HomeBanner() {
  return (
    <section className="mx-auto flex max-w-292.5 flex-col gap-6 px-4 py-6 md:flex-row md:py-10">
      {/* Left Column – Categories */}
      <div className="hidden w-[217px] border-r border-gray-200 pr-4 md:block">
        <ul className="flex flex-col gap-4 text-[14px] text-black">
          {[
            "Woman’s Fashion",
            "Men’s Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby’s & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column – Banner */}
      <div className="relative flex h-[260px] w-full items-center bg-black px-6 md:h-[344px] md:flex-1 md:px-14">
        {/* Left Content */}
        <div className="z-10 text-white">
          <div className="mb-4 flex items-center gap-4 md:mb-5">
            <Image
              src="/assets/images/home/apple-logo.png"
              alt="Apple"
              width={40}
              height={40}
            />
            <span className="text-[14px] md:text-[16px]">
              iPhone 14 Series
            </span>
          </div>

          <h2 className="mb-4 text-[28px] font-semibold leading-[36px] md:mb-6 md:text-[48px] md:leading-[56px]">
            Up to 10%
            <br />
            off Voucher
          </h2>

          <div className="flex items-center gap-2 text-[14px] md:text-[16px]">
            <span className="border-b border-white pb-1">Shop Now</span>
            <span>→</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 md:right-10 md:block">
          <Image
            src="/assets/images/home/apple-phone.png"
            alt="iPhone"
            width={496}
            height={352}
          />
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-400"></span>
          <span className="h-2 w-2 rounded-full bg-gray-400"></span>
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          <span className="h-2 w-2 rounded-full bg-gray-400"></span>
          <span className="h-2 w-2 rounded-full bg-gray-400"></span>
        </div>
      </div>
    </section>
  );
}
