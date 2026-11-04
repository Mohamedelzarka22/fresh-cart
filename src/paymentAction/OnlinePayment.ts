"use server"

import { getMyToken } from "@/utilities/token"
import axios from "axios"

export async function onlinePaymentAction(CardId: string, value: object) {
    const token = await getMyToken()

    if (!token) {
        throw new Error("login first")
    }

    const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CardId}?url=http://localhost:3000`, value, {
        headers: {
            token: token as string,
            

        }
    })

    return data 
}