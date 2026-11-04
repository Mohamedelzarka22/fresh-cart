
import { getSingleProducts } from '@/apis/product'
import CardBtn from '@/app/_components/CardBtn/CardBtn'
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

    return (
        <div className='my-12 w-full md:w-[90%]'>
            <div className='grid grid-cols-12'>

                <div className='col-span-12 md:col-span-4'>
                    <div>
                        <img src={data?.imageCover} alt={data?.title} />
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
        </div>
    )
}

export default ProductDetails
