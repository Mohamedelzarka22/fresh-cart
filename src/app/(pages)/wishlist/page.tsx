
"use client";

import { useWishlistContext } from "@/Context/WishlistContext";
import HomeCard from "@/app/_components/HomeCard/HomeCard";

export default function WishlistPage() {
  const { wishlist } = useWishlistContext();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">
        My Wishlist ❤️
      </h1>

      <div className="grid grid-cols-12 gap-5">
        {wishlist.map((product) => (
          <HomeCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {wishlist.length === 0 && (
        <p className="text-center text-gray-500">
          Your wishlist is empty
        </p>
      )}
    </div>
  );
}
