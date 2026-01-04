// @/app/shop/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Sample products data
  const allProducts = [
    {
      id: 1,
      image: "/assets/images/home/game.png",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
      discount: "-40%",
      category: "Electronics",
      type: "Gaming",
    },
    {
      id: 2,
      image: "/assets/images/home/keyboard.png",
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 4,
      reviews: 75,
      discount: "-35%",
      category: "Electronics",
      type: "Accessories",
    },
    {
      id: 3,
      image: "/assets/images/home/lcd.png",
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 5,
      reviews: 99,
      discount: "-30%",
      category: "Electronics",
      type: "Monitors",
    },
    {
      id: 4,
      image: "/assets/images/home/chair.png",
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      rating: 4,
      reviews: 99,
      discount: "-25%",
      category: "Furniture",
      type: "Chairs",
    },
    {
      id: 5,
      image: "/assets/images/home/game.png",
      title: "RGB Gaming Controller",
      price: 85,
      oldPrice: 120,
      rating: 5,
      reviews: 156,
      discount: "-29%",
      category: "Electronics",
      type: "Gaming",
    },
    {
      id: 6,
      image: "/assets/images/home/keyboard.png",
      title: "Mechanical Keyboard Pro",
      price: 450,
      oldPrice: 600,
      rating: 5,
      reviews: 203,
      discount: "-25%",
      category: "Electronics",
      type: "Accessories",
    },
    {
      id: 7,
      image: "/assets/images/home/lcd.png",
      title: "4K Ultra HD Monitor",
      price: 599,
      oldPrice: 799,
      rating: 4,
      reviews: 145,
      discount: "-25%",
      category: "Electronics",
      type: "Monitors",
    },
    {
      id: 8,
      image: "/assets/images/home/chair.png",
      title: "Executive Office Chair",
      price: 299,
      oldPrice: 450,
      rating: 5,
      reviews: 89,
      discount: "-34%",
      category: "Furniture",
      type: "Chairs",
    },
    {
      id: 9,
      image: "/assets/images/home/game.png",
      title: "Pro Gaming Headset",
      price: 199,
      oldPrice: 250,
      rating: 5,
      reviews: 432,
      discount: "-20%",
      category: "Electronics",
      type: "Gaming",
    },
    {
      id: 10,
      image: "/assets/images/home/keyboard.png",
      title: "Wireless Mouse Pro",
      price: 79,
      oldPrice: 99,
      rating: 4,
      reviews: 287,
      discount: "-20%",
      category: "Electronics",
      type: "Accessories",
    },
    {
      id: 11,
      image: "/assets/images/home/lcd.png",
      title: "Curved Gaming Monitor 27",
      price: 449,
      oldPrice: 599,
      rating: 5,
      reviews: 198,
      discount: "-25%",
      category: "Electronics",
      type: "Monitors",
    },
    {
      id: 12,
      image: "/assets/images/home/chair.png",
      title: "Ergonomic Study Chair",
      price: 189,
      oldPrice: 249,
      rating: 4,
      reviews: 156,
      discount: "-24%",
      category: "Furniture",
      type: "Chairs",
    },
    {
      id: 13,
      image: "/assets/images/home/game.png",
      title: "Gaming Racing Wheel",
      price: 299,
      oldPrice: 399,
      rating: 5,
      reviews: 234,
      discount: "-25%",
      category: "Electronics",
      type: "Gaming",
    },
    {
      id: 14,
      image: "/assets/images/home/keyboard.png",
      title: "RGB Backlit Keyboard",
      price: 129,
      oldPrice: 179,
      rating: 4,
      reviews: 567,
      discount: "-28%",
      category: "Electronics",
      type: "Accessories",
    },
    {
      id: 15,
      image: "/assets/images/home/lcd.png",
      title: "Ultra-Wide Monitor 34",
      price: 699,
      oldPrice: 899,
      rating: 5,
      reviews: 289,
      discount: "-22%",
      category: "Electronics",
      type: "Monitors",
    },
    {
      id: 16,
      image: "/assets/images/home/chair.png",
      title: "Premium Gaming Chair",
      price: 499,
      oldPrice: 699,
      rating: 5,
      reviews: 445,
      discount: "-29%",
      category: "Furniture",
      type: "Chairs",
    },
  ];

  const categories = ["Electronics", "Furniture", "Clothing", "Books"];
  const types = ["Gaming", "Accessories", "Monitors", "Chairs"];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const typeMatch =
      selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch =
      selectedRating === 0 || product.rating >= selectedRating;

    return categoryMatch && typeMatch && priceMatch && ratingMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Pagination handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages is less than max
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show first page
      pageNumbers.push(1);

      // Calculate range around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push("...");
      }

      // Add pages around current page
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1170px] px-4 py-8 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[14px]">
          <Link href="/" className="text-gray-500 hover:text-black">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-black">Shop</span>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Sidebar - Filters */}
          <div className="w-full lg:w-[280px]">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-[20px] font-semibold text-black">
                FILTERS
              </h2>

              {/* Categories */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="mb-4 text-[16px] font-medium text-black">
                  CATEGORIES
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 cursor-pointer accent-[#DB4444]"
                      />
                      <span className="text-[14px] text-gray-700">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="mb-4 text-[16px] font-medium text-black">
                  TYPE
                </h3>
                <div className="space-y-3">
                  {types.map((type) => (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeChange(type)}
                        className="h-4 w-4 cursor-pointer accent-[#DB4444]"
                      />
                      <span className="text-[14px] text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="mb-4 text-[16px] font-medium text-black">
                  PRICE RANGE
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => {
                      setPriceRange([priceRange[0], parseInt(e.target.value)]);
                      setCurrentPage(1);
                    }}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#DB4444]"
                  />
                  <div className="flex items-center justify-between text-[14px] text-gray-700">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="mb-4 text-[16px] font-medium text-black">
                  RATING
                </h3>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label
                      key={rating}
                      className="flex cursor-pointer items-center gap-3"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedRating === rating}
                        onChange={() => {
                          setSelectedRating(rating);
                          setCurrentPage(1);
                        }}
                        className="h-4 w-4 cursor-pointer accent-[#DB4444]"
                      />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, idx) => (
                          <Image
                            key={idx}
                            src={
                              idx < rating
                                ? "/assets/icons/yellow-star.png"
                                : "/assets/icons/star.png"
                            }
                            alt="Star"
                            width={16}
                            height={16}
                          />
                        ))}
                        <span className="ml-1 text-[14px] text-gray-700">
                          & Up
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedTypes([]);
                  setPriceRange([0, 1000]);
                  setSelectedRating(0);
                  setCurrentPage(1);
                }}
                className="w-full rounded-md bg-gray-200 py-3 text-[14px] font-medium text-gray-700 transition-colors hover:bg-gray-300"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Right Side - Products */}
          <div className="flex-1">
            {/* Header with Sort */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-[24px] font-semibold text-black md:text-[28px]">
                  ALL COLLECTIONS
                </h1>
                <p className="mt-1 text-[14px] text-gray-600">
                  Showing {indexOfFirstProduct + 1}-
                  {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
                  {sortedProducts.length} products
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <label className="text-[14px] text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-[14px] outline-none focus:border-[#DB4444]"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="relative flex h-[250px] items-center justify-center bg-gray-100">
                      {/* Discount Badge */}
                      {product.discount && (
                        <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-2 py-1 text-[12px] font-medium text-white">
                          {product.discount}
                        </span>
                      )}

                      {/* Action Icons */}
                      <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-[#DB4444] hover:text-white">
                          <Image
                            src="/assets/icons/wishlist.png"
                            alt="Wishlist"
                            width={18}
                            height={18}
                          />
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-[#DB4444] hover:text-white">
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
                        width={180}
                        height={180}
                        className="object-contain"
                      />

                      {/* Add to Cart Button */}
                      <button className="absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center bg-black text-[14px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                        Add To Cart
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="p-4">
                      <h3 className="mb-2 line-clamp-2 text-[14px] font-medium text-black md:text-[16px]">
                        {product.title}
                      </h3>

                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-[16px] font-semibold text-[#DB4444]">
                          ${product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-[14px] text-gray-400 line-through">
                            ${product.oldPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1">
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
                          />
                        ))}
                        <span className="ml-1 text-[12px] text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-lg bg-white">
                <p className="text-[16px] text-gray-500">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}

            {/* Pagination */}
            {currentProducts.length > 0 && totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-700 transition-colors ${
                      currentPage === 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    ←
                  </button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((pageNum, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        typeof pageNum === "number" && handlePageChange(pageNum)
                      }
                      disabled={pageNum === "..."}
                      className={`flex h-10 min-w-[40px] items-center justify-center rounded-md px-2 text-[14px] font-medium transition-colors ${
                        pageNum === currentPage
                          ? "bg-[#DB4444] text-white"
                          : pageNum === "..."
                          ? "cursor-default border-0"
                          : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-700 transition-colors ${
                      currentPage === totalPages
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}