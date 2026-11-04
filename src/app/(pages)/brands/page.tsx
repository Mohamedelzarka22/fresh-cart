import { getAllBrands } from '@/apis/brands/brands'
import { Brands as BrandsType } from '@/types/brands.t'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Brands = async () => {

  const data = await getAllBrands()

  return (
    <div className="w-full bg-slate-50 md:w-[90%] my-12 p-4 mx-auto rounded-xl">

      <div className="grid grid-cols-12 gap-5 p-4">

        {data.map(function (brand: BrandsType) {
          return (
            <Link
              href={`/brands/${brand._id}`}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
              key={brand._id}
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-[205px] items-center justify-center rounded-2xl bg-gray-50 p-4">

                  <div className="flex h-[120px] w-full items-center justify-center bg-white">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={200}
                      height={120}
                      className="max-h-[100px] w-auto object-contain"
                    />
                  </div>

                </div>

                <h2 className="mt-4 text-center font-semibold text-gray-900">
                  {brand.name}
                </h2>

              </div>
            </Link>
          )
        })}

      </div>

    </div>
  )
}

export default Brands