import React from "react"

import {
  useCheckout,
  useCartItems,
  useCartTotals,
  useCartCount,
} from "../contexts/storeContext"

import {
  checkout__container,
  checkout__items,
  checkout__summary,
  checkout__summaryTitle,
} from "./checkout.module.css"

import Layout from "../components/layout/layout"
import CheckoutItem from "../components/checkoutItem/checkoutItem"
import SummaryDetail from "../components/summaryDetail/summaryDetail"
import Button from "../components/button/button"

const CheckoutPage = () => {
  const checkout = useCheckout()
  const lineItems = useCartItems()
  const { total } = useCartTotals()
  const count = useCartCount()

  return (
    <Layout>
      <div className={checkout__container}>
        <section className={checkout__items}>
          {lineItems.map(item => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </section>
        <section className={checkout__summary}>
          <h2 className={checkout__summaryTitle}>
            Order Summary ({count} {count > 1 ? "Items" : "Item"})
          </h2>
          <div>
            <SummaryDetail title="Delivery" amount="£5.00" />
            <SummaryDetail title="Total" amount={total} />
          </div>
          <Button content="Checkout" handleClick={checkout} />
        </section>
      </div>
    </Layout>
  )
}

export default CheckoutPage
