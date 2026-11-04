
"use server"

import { getMyToken } from "@/utilities/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

type MyToken = {
    id: string
}

export async function getAllOrdersAction() {
    const token = await getMyToken()

    if (!token) {
        throw new Error("login first")
    }

    const decoded = jwtDecode<MyToken>(token)

    const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`
    )

    return data
}
