"use client";

import React, { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Product } from "@/types/product.t";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import CardBtn from "../CardBtn/CardBtn";
import { useWishlistContext, WishlistContext } from "@/Context/WishlistContext";

const HomeCard = ({ product }: { product: Product }) => {
  const {
    wishlist,
    addProductWishlist,
    removeProductWishlist
} = useWishlistContext();

  const isFavorite = wishlist.some((item) => item.id === product.id);

  function handleWishlist() {
    if (isFavorite) {
      removeProductWishlist(product.id);
    } else {
      addProductWishlist(product.id);
    }
  }

  return (
    <div className="products col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <Card className="group relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

        {/* Product Image */}
        <CardContent className="relative p-0">

          <div className="relative overflow-hidden rounded-lg bg-gray-50">
            <Link href={`/productDetails/${product.id}`}>
              <Image
                width={500}
                height={500}
                src={product.imageCover}
                alt={product.title}
                className="h-52 w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              aria-label="Add to wishlist"
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all hover:scale-110"
            >
              <FaHeart
                className={`text-sm transition-colors ${
                  isFavorite ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* Product Details */}
          <div className="px-1 pt-3">

            <p className="mb-1 text-xs font-medium text-gray-400">
              {product.category.name}
            </p>

            <Link href={`/productDetails/${product.id}`}>
              <h3 className="mb-2 min-h-10 text-sm font-semibold text-gray-800 transition-colors hover:text-green-600">
                {product.title.split(" ").slice(0, 4).join(" ")}
              </h3>
            </Link>

            {/* Rating */}
            <div className="mb-2 flex items-center gap-1">
              <FaStar className="text-xs text-yellow-400" />
              <span className="text-xs font-medium text-gray-600">
                {product.ratingsAverage}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-900">
                {product.price} EGP
              </p>
            </div>

          </div>
        </CardContent>

        {/* Add To Cart */}
        <CardFooter className="px-1 pb-1 pt-3">
          <div className="w-full">
            <CardBtn id={product.id} />
          </div>
        </CardFooter>

      </Card>
    </div>
  );
};

export default HomeCard;