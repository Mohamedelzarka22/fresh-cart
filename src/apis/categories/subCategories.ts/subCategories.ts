import axios from "axios"

export async function getAllSubCategories() {
    try {

        const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/subcategories")

        return data.data
    } catch (e) {
        console.log(e)
    }
}