'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ExploreOurProducts() {
  const products = [
    {
      badge: null,
      image: '/assets/images/home/game.png',
      title: 'Breed Dry Dog Food',
      price: '$100',
      old: null,
      reviews: 35,
      rating: 3,
    },
    {
      badge: null,
      image: '/assets/images/home/keyboard.png',
      title: 'CANON EOS DSLR Camera',
      price: '$360',
      old: null,
      reviews: 95,
      rating: 4,
    },
    {
      badge: null,
      image: '/assets/images/home/lcd.png',
      title: 'ASUS FHD Gaming Laptop',
      price: '$700',
      old: null,
      reviews: 325,
      rating: 5,
    },
    {
      badge: null,
      image: '/assets/images/home/chair.png',
      title: 'Curology Product Set',
      price: '$500',
      old: null,
      reviews: 145,
      rating: 4,
    },
    {
      badge: 'NEW',
      image: '/assets/images/home/game.png',
      title: 'Kids Electric Car',
      price: '$960',
      old: null,
      reviews: 65,
      rating: 5,
    },
    {
      badge: null,
      image: '/assets/images/home/keyboard.png',
      title: 'Jr. Zoom Soccer Cleats',
      price: '$116',
      old: null,
      reviews: 35,
      rating: 5,
    },
    {
      badge: 'NEW',
      image: '/assets/images/home/lcd.png',
      title: 'GP11 Shooter USB Gamepad',
      price: '$660',
      old: null,
      reviews: 55,
      rating: 4,
    },
    {
      badge: null,
      image: '/assets/images/home/chair.png',
      title: 'Quilted Satin Jacket',
      price: '$660',
      old: null,
      reviews: 55,
      rating: 4,
    },
  ];

  return (
    <section className="mx-auto max-w-292.5 py-16 px-4">
      {/* Header */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-8 w-4 rounded bg-[#DB4444] md:h-10 md:w-5"></span>
            <span className="text-[14px] font-semibold text-[#DB4444]">
              Our Products
            </span>
          </div>
          <h2 className="text-[28px] font-semibold text-black md:text-[36px]">
            Explore Our Products
          </h2>
        </div>

        {/* Arrows (UI only, no logic) */}
        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <Image
              src="/assets/icons/left-icon.png"
              alt="Prev"
              width={16}
              height={16}
            />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <Image
              src="/assets/icons/right-icon.png"
              alt="Next"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="group relative"
          >
            <div className="relative flex h-62.5 items-center justify-center bg-gray-100 transition-shadow duration-200 group-hover:shadow-lg">
              {/* Badge */}
              {p.badge && (
                <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-2 py-1 text-[12px] text-white">
                  {p.badge}
                </span>
              )}

              {/* Icons */}
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

              <Image
                src={p.image}
                alt={p.title}
                width={190}
                height={180}
              />

              {/* Hover Add to Cart */}
              <button className="absolute bottom-0 left-0 right-0 hidden h-10 items-center justify-center bg-black text-[14px] text-white group-hover:flex">
                Add To Cart
              </button>
            </div>

            {/* Info */}
            <h3 className="mt-4 text-[16px] text-black">
              {p.title}
            </h3>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-[16px] font-semibold text-[#DB4444]">
                {p.price}
              </span>
              {p.old && (
                <span className="text-[14px] text-gray-400 line-through">
                  {p.old}
                </span>
              )}
            </div>

            <div className="mt-1 flex items-center gap-1">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  src={
                    idx < p.rating
                      ? '/assets/icons/yellow-star.png'
                      : '/assets/icons/star.png'
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

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <Link href="/shop" className="rounded bg-[#DB4444] px-12 py-4 text-[16px] text-white">
          View All Products
        </Link>
      </div>
    </section>
  );
}
