
"use client"

import { addProductToCartAction } from '@/CardAction/addProductCart'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { CartContext, useCartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import { toast } from 'sonner'

const CardBtn = ({ id }: { id: string }) => {

const { addProductCart } = useCartContext();

    async function addProductToCart() {
        const data = await addProductCart(id)
        console.log(data)

        if (data.status === 'success') {
            toast.success(data.message, { position: "top-center" })
        }else {
            toast.error("Product added failed to your cart" ,{ position: "top-center" })
        }
    }

    return (
        <>
            <Button onClick={addProductToCart} className="w-full" size="lg">Add Product</Button>

        </>
    )
}

export default CardBtn