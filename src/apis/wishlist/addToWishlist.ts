import { getMyToken } from "@/utilities/token";
import axios from "axios";



export async function addToWishlist(productId: string) {
  const token = await getMyToken();

  const { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      productId: productId,
    },
    {
      headers: {
        token:token
      },
    }
  );

  return data;
}