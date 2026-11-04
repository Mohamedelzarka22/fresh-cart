import { getAllCategories } from '@/apis/categories/category'
import { Category } from '@/types/category.t'
import React from 'react'
import CategorySlider from '../CategorySlider/CategorySlider'

const Categories = async () => {
    const data : Category [] = await getAllCategories()
    
  return (
          <div className='w-full md:w-[80%] mx-auto my-7 px-5'>
            <CategorySlider categories={data} />

          </div>
  )
}

export default Categories