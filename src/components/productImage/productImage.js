import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { productimage } from "./productImage.module.css"

const ProductImage = ({ image, alt }) => {
  return (
    <section className={productimage}>
      <GatsbyImage image={image} alt={alt} />
    </section>
  )
}

export default ProductImage
