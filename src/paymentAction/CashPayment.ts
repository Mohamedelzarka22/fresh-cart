"use server"

import { getMyToken } from "@/utilities/token"
import axios from "axios"

export async function cashPaymentAction(CardId: string, value: object) {
    const token = await getMyToken()

    if (!token) {
        throw new Error("login first")
    }

    const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${CardId}`, value, {
        headers: {
            token: token as string,
            

        }
    })

    console.log(token,CardId)

    return data 
}