
'use client'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs'

type Props = {
    title: string
    description: string
    category: string
    brand: string
    ratingsAverage: number
    ratingsQuantity: number
}

export default function ProductTabs({
    title,
    description,
    category,
    brand,
    ratingsAverage,
    ratingsQuantity
}: Props) {

    return (
        <div className='mt-10 border rounded-xl p-5 w-full md:w-[90%] mx-auto'>

            <Tabs defaultValue='details'>

                <TabsList className='w-full justify-start mb-5'>
                    <TabsTrigger value='details'>
                        Product Details
                    </TabsTrigger>

                    <TabsTrigger value='reviews'>
                        Reviews
                    </TabsTrigger>

                    <TabsTrigger value='shipping'>
                        Shipping & Returns
                    </TabsTrigger>
                </TabsList>

                {/* Product Details */}
                <TabsContent value='details' className='p-5'>

                    <h3 className='font-bold text-lg mb-4'>
                        Product Information
                    </h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                        <div className='flex justify-between border-b pb-3'>
                            <span className='text-gray-500'>Product Name</span>
                            <span className='font-medium'>{title}</span>
                        </div>

                        <div className='flex justify-between border-b pb-3'>
                            <span className='text-gray-500'>Category</span>
                            <span className='font-medium'>{category}</span>
                        </div>

                        <div className='flex justify-between border-b pb-3'>
                            <span className='text-gray-500'>Brand</span>
                            <span className='font-medium'>{brand}</span>
                        </div>

                        <div className='flex justify-between border-b pb-3'>
                            <span className='text-gray-500'>Rating</span>
                            <span className='font-medium'>{ratingsAverage} / 5</span>
                        </div>

                    </div>

                    <h3 className='font-bold text-lg mt-8 mb-4'>
                        Description
                    </h3>

                    <p className='text-gray-600 leading-7'>
                        {description}
                    </p>

                </TabsContent>

                {/* Reviews */}
                <TabsContent value='reviews' className='p-5'>

                    <h3 className='text-xl font-bold mb-5'>
                        Customer Reviews
                    </h3>

                    <div className='flex items-center gap-3 mb-6'>

                        <span className='text-4xl font-bold'>
                            {ratingsAverage}
                        </span>

                        <div>
                            <div className='flex text-yellow-500 gap-1'>
                                {'★'.repeat(Math.round(ratingsAverage))}
                            </div>

                            <p className='text-sm text-gray-500'>
                                Based on {ratingsQuantity} reviews
                            </p>
                        </div>

                    </div>

                    <p className='text-gray-500'>
                        Individual customer reviews are not available yet.
                    </p>

                </TabsContent>

                {/* Shipping */}
                <TabsContent value='shipping' className='p-5'>

                    <h3 className='text-xl font-bold mb-4'>
                        Shipping Information
                    </h3>

                    <p className='text-gray-600 leading-7'>
                        We offer reliable shipping services to ensure your
                        products arrive safely and on time.
                    </p>

                    <h3 className='text-xl font-bold mt-8 mb-4'>
                        Returns Policy
                    </h3>

                    <p className='text-gray-600 leading-7'>
                        Please contact our support team for assistance
                        with returns.
                    </p>

                </TabsContent>

            </Tabs>

        </div>
    )
}
