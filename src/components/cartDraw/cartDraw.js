import React from "react"

import { cartDraw } from "./cartDraw.module.css"

import { useCheckout, useCartItems } from "../../contexts/storeContext"

const CartDraw = () => {
  const checkout = useCheckout()
  const lineItems = useCartItems()

  return (
    <div className={cartDraw}>
      <h1>Cart Draw</h1>
      {lineItems.map(item => (
        <div>
          <p>{item.title}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
      <button onClick={checkout}>Checkout</button>
    </div>
  )
}

export default CartDraw
