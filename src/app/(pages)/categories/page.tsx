
import { getAllCategories } from '@/apis/categories/category'
import { getAllSubCategories } from '@/apis/categories/subCategories.ts/subCategories'
import CategorySliderCategories from '@/app/_components/CategorySliderCategories/CategorySliderCategories'
import type { Category } from '@/types/category.t'

const Categories = async () => {
  const data: Category[] = await getAllCategories()

  const subCategoriesdata = await getAllSubCategories()

  console.log(subCategoriesdata)

  return (
    <div className='w-full md:w-[80%] mx-auto my-7 px-5'>
      <CategorySliderCategories categories={data} />
    </div>
  )
}

export default Categories
