
import { getAllOrdersAction } from '@/paymentAction/Order'
import { Order } from '@/types/order.t'
import Image from 'next/image'
import React from 'react'

const AllOrdders = async () => {
  const data: Order[] = await getAllOrdersAction()

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">

        {/* Page Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
            My Account
          </p>

          <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
            My Orders
          </h1>

          <p className="mt-2 text-slate-500">
            Track your orders and check your purchase details.
          </p>
        </div>

        {/* Empty Orders */}
        {!data || data.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-3xl">
              🛍️
            </div>

            <h2 className="text-xl font-bold text-slate-800">
              No orders yet
            </h2>

            <p className="mt-2 text-slate-500">
              Your orders will appear here once you make a purchase.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {data.map((order) => (
              <div
                key={order._id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-md"
              >

                {/* Order Header */}
                <div className="flex flex-col gap-4 border-b border-slate-100 bg-slate-50/70 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Order ID
                    </p>

                    <h2 className="mt-1 break-all font-bold text-slate-800">
                      #{order._id}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      {new Date(order.createdAt).toLocaleDateString(
                        'en-GB',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        order.isPaid
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {order.isPaid ? 'Paid' : 'Payment pending'}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        order.isDelivered
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {order.isDelivered ? 'Delivered' : 'Not delivered'}
                    </span>
                  </div>
                </div>

                {/* Products */}
                <div className="p-5">
                  <h3 className="mb-4 font-bold text-slate-800">
                    Order items
                  </h3>

                  <div className="space-y-4">
                    {order.cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="flex flex-col gap-4 rounded-xl border border-slate-100 p-3 sm:flex-row sm:items-center"
                      >

                        {/* Bigger Product Image */}
                        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl bg-slate-50 sm:h-36 sm:w-36">
                          <Image
                            src={item.product.imageCover}
                            alt={item.product.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 144px"
                            className="object-contain p-2"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <h4 className="font-semibold leading-6 text-slate-800">
                            {item.product.title}
                          </h4>

                          <p className="mt-2 text-sm text-slate-500">
                            Quantity: {item.count}
                          </p>
                        </div>

                        {/* Product Price */}
                        <div className="sm:text-right">
                          <p className="text-lg font-bold text-emerald-700">
                            {item.price.toLocaleString('en-US')} EGP
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            Item price
                          </p>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Footer */}
                <div className="flex flex-col gap-4 border-t border-slate-100 bg-slate-50/70 p-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Payment method
                    </p>

                    <p className="mt-1 font-semibold capitalize text-slate-800">
                      {order.paymentMethodType}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-sm text-slate-500">
                      Total order price
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-emerald-700">
                      {order.totalOrderPrice.toLocaleString('en-US')} EGP
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  )
}

export default AllOrdders
