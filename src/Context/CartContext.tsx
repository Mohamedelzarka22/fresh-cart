
import { addProductToCartAction } from '@/CardAction/addProductCart'
import { clearCartItemAction } from '@/CardAction/clearCart'
import { getUserCartAction } from '@/CardAction/getUserCart'
import { deleteCartItemAction } from '@/CardAction/removeCartItem'
import { updateCartCountAction } from '@/CardAction/updateCartCount'
import { Cart, CartProduct } from '@/types/cart.t'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'


interface CartContextType {
  products: CartProduct[]
  totalCartPrice: number
  totalCartItem: number
  isLoading: boolean
  CartId: string

  addProductCart: (id: string) => Promise<any>
  deleteCartItem: (id: string) => Promise<any>
  clearCart: () => Promise<any>
  updateCartCount: (id: string, count: number) => Promise<any>
  afterPayment: () => void
}

export const CartContext = createContext<CartContextType | null>(null)
export function useCartContext() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used within CartContextProvider')
  }

  return context
}

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [products, setProducts] = useState<CartProduct[]>([])
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const [totalCartItem, setTotalCartItem] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [CartId, setCartId] = useState("")


  async function getUserCart() {
    try {
      setIsLoading(true)

      const data: Cart = await getUserCartAction()

      setProducts(data.data.products)
      setTotalCartItem(data.numOfCartItems)
      setTotalCartPrice(data.data.totalCartPrice)
      setCartId(data.cartId)

    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  }

  async function addProductCart(id: string) {
    try {

      const data = await addProductToCartAction(id)
      setProducts(data.data.products)
      setTotalCartItem(data.numOfCartItems)
      setTotalCartPrice(data.data.totalCartPrice)
      setCartId(data.cartId)

      return data

    } catch (error) {
      console.log(error)
    }


  }
  async function deleteCartItem(id: string) {
    try {

      const data = await deleteCartItemAction(id)
      setProducts(data.data.products)
      setTotalCartItem(data.numOfCartItems)
      setTotalCartPrice(data.data.totalCartPrice)
      toast.success(data.message, { position: "top-center" })
      setCartId(data.cartId)

      return data

    } catch (error) {
      console.log(error)
    }


  }
  async function clearCart() {
    try {

      const data = await clearCartItemAction()
      setProducts(data.data.products)
      setTotalCartItem(data.numOfCartItems)
      setTotalCartPrice(data.data.totalCartPrice)
      toast.success(data.message, { position: "top-center" })
      setCartId("")

      return data

    } catch (error) {
      console.log(error)
    }


  }
  async function updateCartCount(id: string, count: number) {
    try {

      const data = await updateCartCountAction(id, count)
      setProducts(data.data.products)
      setTotalCartItem(data.numOfCartItems)
      setTotalCartPrice(data.data.totalCartPrice)
      toast.success(data.message, { position: "top-center" })
      setCartId(data.cartId)

      return data

    } catch (error) {
      console.log(error)
    }


  }


  useEffect(function () {
    getUserCart()
  }, [])


  function afterPayment() {
    setProducts([])
    setTotalCartItem(0)
    setTotalCartPrice(0)
    setCartId("")

  }


  return (
    <CartContext.Provider value={{ products, totalCartItem, totalCartPrice, addProductCart, isLoading, deleteCartItem, updateCartCount, clearCart, CartId, afterPayment }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
