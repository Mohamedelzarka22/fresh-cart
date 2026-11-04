
import React from 'react'
import Link from 'next/link'

import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Headset,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-16">

      {/* Benefits Section */}
      <div className="bg-green-50 py-5">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <Truck size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Free Shipping</h3>
              <p className="text-xs text-gray-500">On orders over 500 EGP</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <RotateCcw size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Easy Returns</h3>
              <p className="text-xs text-gray-500">7 days return policy</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Secure Payment</h3>
              <p className="text-xs text-gray-500">100% secure payment</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <Headset size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold">24/7 Support</h3>
              <p className="text-xs text-gray-500">Dedicated support team</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#101827] text-white py-12">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* About */}
            <div className="lg:col-span-2">

              <Link href="/" className="inline-block text-2xl font-bold mb-5">
                <span className="text-green-500">🛒</span> FreshCart
              </Link>

              <p className="text-gray-400 text-sm leading-7 mb-5 max-w-sm">
                FreshCart is your ultimate destination for quality products.
                From electronics to fashion, we bring you the best deals
                with unbeatable prices.
              </p>

              <div className="space-y-3 text-sm text-gray-400">

                <p className="flex items-center gap-3">
                  <Phone size={16} className="text-green-500" />
                  +1 (555) 123-4567
                </p>

                <p className="flex items-center gap-3">
                  <Mail size={16} className="text-green-500" />
                  support@freshcart.com
                </p>

                <p className="flex items-center gap-3">
                  <MapPin size={16} className="text-green-500" />
                  123 Commerce Street, New York, NY 10001
                </p>

              </div>

              {/* Social Media */}
              <div className="flex gap-3 mt-6">

                {[
                  { Icon: FaFacebookF, href: 'https://facebook.com' },
                  { Icon: FaTwitter, href: 'https://twitter.com' },
                  { Icon: FaInstagram, href: 'https://instagram.com' },
                  { Icon: FaYoutube, href: 'https://youtube.com' },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"
                  >
                    <Icon size={17} />
                  </a>
                ))}

              </div>

            </div>

            {/* Shop */}
            <div>
              <h3 className="font-semibold mb-5">Shop</h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-green-500 transition">
                    All Products
                  </Link>
                </li>

                <li>
                  <Link href="/categories" className="hover:text-green-500 transition">
                    Categories
                  </Link>
                </li>

                <li>
                  <Link href="/brands" className="hover:text-green-500 transition">
                    Brands
                  </Link>
                </li>

                <li>
                  <Link href="/products" className="hover:text-green-500 transition">
                    Discounts
                  </Link>
                </li>

                <li>
                  <Link href="/wishlist" className="hover:text-green-500 transition">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="font-semibold mb-5">Account</h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/profile" className="hover:text-green-500 transition">
                    My Account
                  </Link>
                </li>

                <li>
                  <Link href="/allorders" className="hover:text-green-500 transition">
                    Orders
                  </Link>
                </li>

                <li>
                  <Link href="/cart" className="hover:text-green-500 transition">
                    Shopping Cart
                  </Link>
                </li>

                <li>
                  <Link href="/login" className="hover:text-green-500 transition">
                    Log In
                  </Link>
                </li>

                <li>
                  <Link href="/signup" className="hover:text-green-500 transition">
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-5">Support</h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/terms" className="hover:text-green-500 transition">
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link href="/help" className="hover:text-green-500 transition">
                    Help Center
                  </Link>
                </li>

                <li>
                  <Link href="/privacy" className="hover:text-green-500 transition">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/returns" className="hover:text-green-500 transition">
                    Return & Refund
                  </Link>
                </li>

                <li>
                  <Link href="/track-order" className="hover:text-green-500 transition">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm">
              © 2026 FreshCart. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-sm font-semibold">
              <span>VISA</span>
              <span className="text-red-400">Mastercard</span>
              <span className="text-gray-300">Apple Pay</span>
              <span className="text-blue-400">PayPal</span>
            </div>

          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
