
import { getSingleProducts } from '@/apis/product'
import CardBtn from '@/app/_components/CardBtn/CardBtn'
import ProductImages from '@/app/_components/ProductImages/ProductImages'
import ProductTabs from '@/app/_components/ProductTabs/ProductTabs'
import { Product } from '@/types/product.t'
import { FaStar } from 'react-icons/fa'

type Props = {
    params: Promise<{
        id: string
    }>
}

const ProductDetails = async ({ params }: Props) => {

    const { id } = await params

    const data: Product = await getSingleProducts(id)
    console.log(data)

    return (
        <div className='my-12 w-full md:w-[90%]'>
            <div className='grid grid-cols-12'>

                <div className='col-span-12 md:col-span-4'>
                    <div>
                        <ProductImages imageCover={data.imageCover} images={data.images} title={data.title} />
                    </div>
                </div>

                <div className='col-span-12 md:col-span-8'>
                    <div className='p-5'>

                        <h1 className='text-3xl mb-5 text-green-600'>
                            {data?.title}
                        </h1>

                        <p className='text-xl'>
                            {data?.description}
                        </p>

                        <p>
                            <FaStar className='text-yellow-500 inline' />
                            {data.ratingsAverage}
                        </p>

                        <p className='my-2 text-green-600'>
                            {data.price} EGY
                        </p>

                        <CardBtn id={data.id} />

                    </div>
                </div>

            </div>

            <ProductTabs
                title={data.title}
                description={data.description}
                category={data.category.name}
                brand={data.brand.name}
                ratingsAverage={data.ratingsAverage}
                ratingsQuantity={data.ratingsQuantity}
            />
        </div>
    )
}

export default ProductDetails
