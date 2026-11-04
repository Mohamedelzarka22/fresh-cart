
"use client";

import { addToWishlist } from "@/apis/wishlist/addToWishlist";
import { getWishlist } from "@/apis/wishlist/getWishlist";
import { removeFromWishlist } from "@/apis/wishlist/removeFromWishlist";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import type { Product } from "@/types/product.t";

interface WishlistContextType {
  wishlist: Product[];
  addProductWishlist: (id: string) => Promise<any>;
  removeProductWishlist: (id: string) => Promise<any>;
}

export const WishlistContext = createContext<WishlistContextType | null>(null);

export function useWishlistContext() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("WishlistContextProvider is missing");
  }

  return context;
}

const WishlistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  async function addProductWishlist(id: string) {
    try {
      const data = await addToWishlist(id);

      await getUserWishlist();

      toast.success(data.message, {
        position: "top-center",
      });

      return data;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  async function getUserWishlist() {
    try {
      const data = await getWishlist();

      setWishlist(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeProductWishlist(id: string) {
    try {
      const data = await removeFromWishlist(id);

      await getUserWishlist();

      toast.success(data.message, {
        position: "top-center",
      });

      return data;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  useEffect(() => {
    getUserWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addProductWishlist,
        removeProductWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
