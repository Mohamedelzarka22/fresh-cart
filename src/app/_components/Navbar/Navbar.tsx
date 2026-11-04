"use client";

import logo from "./../../../../public/images/logo (2).png";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartContext } from "@/Context/CartContext";
import { useWishlistContext, WishlistContext } from "@/Context/WishlistContext";
import { useContext } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { status } = useSession();

  const { totalCartItem } = useCartContext();
  const { wishlist } = useWishlistContext();
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="w-full lg:w-[95%] mx-auto px-4 py-4">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-5">

          {/* Logo */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <Link href="/">
              <Image
                src={logo}
                alt="FreshCart Logo"
                width={140}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          {status === "authenticated" && (
            <div className="w-full lg:flex-1">
              <ul className="flex flex-wrap justify-center items-center gap-3 lg:gap-6 text-sm font-medium text-gray-600">

                <li>
                  <Link href="/" className="hover:text-green-600 transition-colors">
                    Products
                  </Link>
                </li>

                <li>
                  <Link href="/brands" className="hover:text-green-600 transition-colors">
                    Brands
                  </Link>
                </li>

                <li>
                  <Link href="/categories" className="hover:text-green-600 transition-colors">
                    Categories
                  </Link>
                </li>

                <li>
                  <Link href="/allorders" className="hover:text-green-600 transition-colors">
                    All Orders
                  </Link>
                </li>

                <li>
                  <Link
                    href="/cart"
                    className="flex items-center gap-2 hover:text-green-600 transition-colors"
                  >
                    <FaShoppingCart />
                    Cart
                    <Badge className="bg-green-600 hover:bg-green-700">
                      {totalCartItem}
                    </Badge>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-2 hover:text-red-600 transition-colors"
                  >
                    <FaHeart className="text-red-500" />
                    Wishlist
                    <Badge variant="destructive">
                      {wishlist.length}
                    </Badge>
                  </Link>
                </li>

              </ul>
            </div>
          )}

          {/* Auth Buttons */}
          <div className="w-full lg:w-auto">
            <ul className="flex justify-center items-center gap-3">

              {status === "loading" && (
                <li className="text-sm text-gray-400">
                  Loading...
                </li>
              )}

              {status === "authenticated" && (
                <li>
                  <Button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="bg-green-600 hover:bg-green-700 rounded-lg px-6"
                  >
                    Log Out
                  </Button>
                </li>
              )}

              {status === "unauthenticated" && (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="text-gray-600 hover:text-green-600 font-medium transition-colors"
                    >
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link href="/register">
                      <Button className="bg-green-600 hover:bg-green-700 rounded-lg px-6">
                        Register
                      </Button>
                    </Link>
                  </li>
                </>
              )}

            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;