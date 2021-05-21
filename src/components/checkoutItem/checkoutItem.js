import React, { useMemo } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"

import {
  checkout__image,
  checkout__container,
  checkout__left,
  checkout__info,
  checkout__buttons,
  checkout__button,
} from "./checkoutItem.module.css"

const CheckoutItem = ({ item }) => {
  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  }

  const image = useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: "constrained",
        crop: "contain",
        width: 260,
        height: 260,
      }),
    [item.variant.image]
  )

  return (
    <section className={checkout__container}>
      <div className={checkout__left}>
        <div className={checkout__image}>
          <GatsbyImage image={image} />
        </div>
        <div className={checkout__info}>
          <h1>{item.title}</h1>
          <div className={checkout__buttons}>
            <button className={checkout__button}>Remove</button>
          </div>
        </div>
      </div>

      <div>
        <p>£{item.variant.price * item.quantity}</p>
        {item.quantity > 1 ? (
          <p>
            {item.quantity} x {item.variant.price}
          </p>
        ) : (
          <> </>
        )}
      </div>
    </section>
  )
}

export default CheckoutItem
