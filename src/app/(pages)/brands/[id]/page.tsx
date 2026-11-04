
import { getProductsByBrand } from '@/apis/brands/getProductsByBrand'
import HomeCard from '@/app/_components/HomeCard/HomeCard'
import { Product } from '@/types/product.t'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function BrandDetails({ params }: Props) {
  const { id } = await params

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands/${id}`
  )

  if (!response.ok) {
    notFound()
  }

  const result = await response.json()
  const brand = result.data

  if (!brand) {
    notFound()
  }

  const data: Product[] = await getProductsByBrand(id)

  return (
    <div className="mx-auto my-12 w-[90%] rounded-xl bg-slate-50 p-6">

      {/* Brand Details */}
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-6 md:flex-row">

          <Image
            src={brand.image}
            alt={brand.name}
            width={250}
            height={180}
            className="h-[180px] w-[250px] object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {brand.name}
            </h1>

            <p className="mt-3 text-gray-500">
              Brand Details
            </p>
          </div>

        </div>
      </div>

      {/* Brand Products */}
      <div className="mt-10">

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          {brand.name} Products
        </h2>

        {data.length > 0 ? (
          <div className="grid grid-cols-12 gap-4">

            {data.map((product) => (
              <HomeCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="py-16 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              No Products Found
            </h3>

            <p className="mt-2 text-gray-500">
              There are no products available for this brand.
            </p>
          </div>
        )}

      </div>

    </div>
  )
}
