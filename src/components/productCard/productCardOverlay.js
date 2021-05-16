import React from "react"
import { Link } from "gatsby"

import {
  productcardoverlay,
  productcardoverlay__title,
  productcardoverlay__vendor,
  productcardoverlay__price,
} from "./productCard.module.css"

const ProductCardOverlay = ({
  title,
  vendor,
  price,
  link,
  productType,
  handle,
}) => {
  return (
    <Link
      to={`/products/${productType.toLowerCase()}/${handle}`}
      className={productcardoverlay}
    >
      <h2 className={productcardoverlay__title}>{title}</h2>
      <p className={productcardoverlay__vendor}>{vendor}</p>
      <div>
        <p className={productcardoverlay__price}>£{price}</p>
      </div>
    </Link>
  )
}

export default ProductCardOverlay
