
"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CartContext, useCartContext } from '@/Context/CartContext'
import { cashPaymentAction } from '@/paymentAction/CashPayment'
import { onlinePaymentAction } from '@/paymentAction/OnlinePayment'
import { getMyToken } from '@/utilities/token'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { toast } from 'sonner'
import { de } from 'zod/v4/locales'

const Payment = () => {

  const router = useRouter()

const { CartId, afterPayment } = useCartContext();
  const details = useRef<HTMLInputElement>(null)
const phone = useRef<HTMLInputElement>(null)
const city = useRef<HTMLInputElement>(null)

 

  async function cashPayment() {
   const value = {
  shippingAddress: {
    details: details.current?.value || "",
    phone: phone.current?.value || "",
    city: city.current?.value || "",
  },
};
    console.log(value)
     const token = await getMyToken()
  console.log(token)

    try {
      const data = await cashPaymentAction(CartId, value)
      afterPayment()
      router.push("/allorders")
      console.log(data)



    } catch (error) {


    }

  }

  async function onlinePayment() {
    const value = {
  shippingAddress: {
    details: details.current?.value || "",
    phone: phone.current?.value || "",
    city: city.current?.value || "",
  },
};

    try {
      const data = await onlinePaymentAction(CartId, value)
      if (data.status === "success") {
        window.location.href = data.session.url

      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='my-12 p-5 w-full mx-auto md:w-1/2'>
      <h1 className='text-3xl text-center mb-5'>Payment</h1>

      <label htmlFor="details">Details</label>
      <Input ref={details} type='text' id='details' className='mb-4' />

      <label htmlFor="phone">Phone</label>
      <Input ref={phone} type='tel' id='phone' className='mb-4' />

      <label htmlFor="city">City</label>
      <Input ref={city} type='text' id='city' className='mb-4' />

      <Button onClick={cashPayment} className='me-3'>Cash Payment</Button>
      <Button onClick={onlinePayment}>Online Payment</Button>
    </div>
  )
}

export default Payment