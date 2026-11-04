import { getMyToken } from "@/utilities/token";
import axios from "axios";

export async function getWishlist() {
    const token = await getMyToken();

    const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
            headers: {
                token: token
            }
        }
    );

    return data;
}