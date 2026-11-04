"use client"

import { Category } from '@/types/category.t'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategorySlider = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-200 my-12 p-4">
        {categories.map((category: Category) => (
          <div key={category._id} className="text-center">
            <Link href={`/categories/${category._id}`}>
              <Image
                width={500}
                height={500}
                src={category.image}
                className="w-full h-[200px] object-cover rounded-lg"
                alt={category.name}
              />

              <p className="text-lg mt-2 mb-6">
                {category.name}
              </p>
            </Link>

          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySlider