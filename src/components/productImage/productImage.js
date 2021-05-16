import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { productimage } from "./productImage.module.css"

const ProductImage = ({ image }) => {
  return (
    <section className={productimage}>
      <GatsbyImage image={image} />
    </section>
  )
}

export default ProductImage
