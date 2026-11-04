"use server"
import { getMyToken } from "@/utilities/token";

import axios from "axios";
import { toast } from "sonner";


export async function deleteCartItemAction(id:string) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }

  const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,
    {
      headers: {
        token: token as string,
      },
    }

  );


  console.log(data)

  return data;

  
}
