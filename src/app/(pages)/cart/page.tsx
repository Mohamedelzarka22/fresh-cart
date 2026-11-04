
"use client"

import { Button } from '@/components/ui/button'
import { CartContext, useCartContext } from '@/Context/CartContext'
import { CartProduct } from '@/types/cart.t'
import { getMyToken } from '@/utilities/token'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";


import React, { useContext } from 'react'

const Cart = () => {
const {
  totalCartPrice,
  clearCart,
  products,
  isLoading,
  deleteCartItem,
  updateCartCount
} = useCartContext()

  if (isLoading) {
return  <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="w-full max-w-xl space-y-6 px-6">
        <Skeleton className="mx-auto h-16 w-16 rounded-full" />
        <Skeleton className="mx-auto h-8 w-64" />
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
      </div>
    </div>
  }

  return (
    <div className='my-12'>

 {products.length === 0  ?   <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <ShoppingCart size={90} className="text-gray-400" />

      <h2 className="text-3xl font-bold">
        Your Cart Is Empty
      </h2>

      <p className="text-gray-500">
        You haven't added any products to your cart yet.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 text-white hover:opacity-90"
      >
        Continue Shopping
      </Link>
    </div> : <div className='w-full p-5 md:w-[90%] mx-auto bg-slate-100'>
       

        <h1>Cart</h1>

        <p className='font-mono my-3 text-green-600'>Total Cart Price {totalCartPrice} EGP</p>

        <Button onClick={clearCart} className="mb-5">Clear</Button>
        <Button  className="ms-3"><Link href="/payment">Payment</Link></Button>

        {products.map(function (product: CartProduct, idx: number) {
          return <div key={idx} className='flex justify-between items-center py-4 border border-b border-green-700/20'>
            <div className='flex gap-3'>
              <div>
                <Image src={product.product.imageCover} width={200} height={200} alt='caer-image' />
              </div>

              <div>
                <h2 className='text-xl'>{product.product.title}</h2>
                <p className='my-3'>Price {product.price} EGP</p>
                <Button onClick={()=> deleteCartItem(product.product._id)} className="">Remove</Button>

              </div>

            </div>

            <div className='flex gap-3 items-center'>
              <Button onClick={()=> updateCartCount(product.product._id,product.count + 1)} className="">+</Button>
              {product.count}
              <Button onClick={()=> updateCartCount(product.product._id,product.count - 1)}>-</Button>

            </div>
          </div>
        })}


      </div> }

      

    </div>
  )
}

export default Cart