
import axios from 'axios'

export async function getProductsByBrand(brandId: string) {
  try {
    const {data}= await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`
    )

  return data.data

   
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Status:', error.response?.status)
      console.log('Error data:', error.response?.data)
    }

    throw error
  }
}
