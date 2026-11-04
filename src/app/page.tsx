
import React from "react";
import { getAllProducts } from "@/apis/product";
import { Product } from "@/types/product.t";
import HomeCard from "./_components/HomeCard/HomeCard";
import MainSlider from "./_components/MainSlider/MainSlider";
import Categories from "./_components/Categories/Categories";
import { FaTruck, FaShieldAlt, FaHeadset, FaUndo } from "react-icons/fa";
import Link from "next/link";

const Products = async () => {
  const data: Product[] = await getAllProducts();

  return (
    <main className="bg-white">

      {/* Hero Slider */}
      <section className="w-full">
        <MainSlider />
      </section>

      {/* Store Features */}
      <section className="w-full lg:w-[90%] mx-auto px-5 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="flex items-center gap-3 p-5 rounded-xl bg-green-50">
            <FaTruck className="text-3xl text-green-600" />
            <div>
              <h3 className="font-bold text-gray-800">Free Shipping</h3>
              <p className="text-xs text-gray-500">On orders over 500 EGP</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5 rounded-xl bg-green-50">
            <FaShieldAlt className="text-3xl text-green-600" />
            <div>
              <h3 className="font-bold text-gray-800">Secure Payment</h3>
              <p className="text-xs text-gray-500">100% secure payment</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5 rounded-xl bg-green-50">
            <FaHeadset className="text-3xl text-green-600" />
            <div>
              <h3 className="font-bold text-gray-800">24/7 Support</h3>
              <p className="text-xs text-gray-500">Dedicated support</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-5 rounded-xl bg-green-50">
            <FaUndo className="text-3xl text-green-600" />
            <div>
              <h3 className="font-bold text-gray-800">Easy Returns</h3>
              <p className="text-xs text-gray-500">Easy return policy</p>
            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="w-full lg:w-[90%] mx-auto px-5">
          <div className="mb-7">
            <p className="text-green-600 font-semibold text-sm mb-2">
              Explore Our Collection
            </p>
            <h2 className="text-3xl font-bold text-gray-800">
              Shop By Category
            </h2>
          </div>

          <Categories />
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="w-full lg:w-[90%] mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="relative overflow-hidden rounded-2xl bg-green-100 p-8 md:p-10">
            <div className="relative z-10 max-w-xs">
              <span className="text-green-700 font-semibold text-sm">
                Fresh & Healthy
              </span>

              <h2 className="text-3xl font-bold text-gray-800 my-3">
                Fresh Fruits & Vegetables
              </h2>

              <p className="text-gray-600 text-sm mb-5">
                Discover fresh products and enjoy the best shopping experience.
              </p>

              <Link
                href="/"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-orange-100 p-8 md:p-10">
            <div className="relative z-10 max-w-xs">
              <span className="text-orange-600 font-semibold text-sm">
                Special Offers
              </span>

              <h2 className="text-3xl font-bold text-gray-800 my-3">
                Best Deals For You
              </h2>

              <p className="text-gray-600 text-sm mb-5">
                Find your favorite products at amazing prices.
              </p>

              <Link
                href="/"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Explore Deals
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="w-full lg:w-[90%] mx-auto px-5">

          <div className="flex flex-wrap justify-between items-end mb-8 gap-3">
            <div>
              <p className="text-green-600 font-semibold text-sm mb-2">
                Our Products
              </p>

              <h2 className="text-3xl font-bold text-gray-800">
                Featured Products
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Explore our latest products and best offers.
              </p>
            </div>

            <span className="text-sm text-gray-500">
              {data.length} Products
            </span>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {data.map((product: Product) => (
              <HomeCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full lg:w-[90%] mx-auto px-5 py-14">
        <div className="rounded-2xl bg-green-700 px-6 py-12 md:px-12 text-center">

          <h2 className="text-3xl font-bold text-white mb-3">
            Subscribe To Our Newsletter
          </h2>

          <p className="text-green-100 mb-7">
            Get updates about new products and special offers.
          </p>

          <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-12 rounded-lg px-4 outline-none text-gray-800"
            />

            <button
              type="button"
              className="h-12 px-8 rounded-lg bg-white text-green-700 font-bold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>

        </div>
      </section>

    </main>
  );
};

export default Products;
