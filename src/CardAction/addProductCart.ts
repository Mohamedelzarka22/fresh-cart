"use server"
import { getMyToken } from "@/utilities/token";
import axios from "axios";



export async function  addProductToCartAction(id:string){
    const token = await getMyToken()

    const value = {
         productId: id
    }

    const {data} = await axios.post("https://ecommerce.routemisr.com/api/v2/cart", value ,{
        headers:{
            Authorization: "Bearer " +token ,
            token: token as string,
            "Content-Type": "application/json"
        }
    })

    return data
}
