"use client"

import { SessionProvider } from "next-auth/react"
import CartContextProvider from "./Context/CartContext"
import WishlistContextProvider from "./Context/WishlistContext"

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <CartContextProvider>
                <WishlistContextProvider>
                    {children}

                </WishlistContextProvider>
            </CartContextProvider>

        </SessionProvider>
    )
}

export default Provider