'use client'

import Image from 'next/image'
import { useState } from 'react'

type Props = {
    imageCover: string
    images: string[]
    title: string
}

export default function ProductImages({ imageCover, images, title }: Props) {

    const [image, setImage] = useState(imageCover)

    return (
        <div>
            <Image
                width={500}
                height={500}
                src={image}
                alt={title}
                className='w-full h-[350px] object-contain'
            />

            <div className='grid grid-cols-3 gap-3 mt-4'>
                {images.map((img, index) => (
                    <Image
                        width={500}
                        height={500}
                        key={index}
                        src={img}
                        alt={title}
                        onClick={() => setImage(img)}
                        className={`w-full h-24 object-contain border rounded-lg p-2 cursor-pointer
                        ${image === img ? 'border-green-600' : 'border-gray-200'}`}
                    />
                ))}
            </div>
        </div>
    )
}