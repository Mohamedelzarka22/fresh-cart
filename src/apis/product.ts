export async function getAllProducts() {
    try {

      const response = await fetch("https://ecommerce.routemisr.com/api/v1/products")
      const { data } = await response.json()
      return data
    } catch (e) {

    }
  }
export async function getSingleProducts(id :string) {
    try {

      const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      const { data } = await response.json()
      return data
    } catch (e) {

    }
  }

 export async function getProductsBySubCategory(id: string) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?subcategory=${id}`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}