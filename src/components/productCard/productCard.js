import React, { useEffect, useState, useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { productcard } from "./productCard.module.css"

import ProductCardOverlay from "./productCardOverlay"

const ProductCard = ({ product }) => {
  const [isOverlay, setIsOverlay] = useState(false)
  const cardRef = useRef()

  useEffect(() => {
    cardRef.current.addEventListener("mouseenter", () => {
      setIsOverlay(true)
    })
    cardRef.current.addEventListener("mouseleave", () => {
      setIsOverlay(false)
    })
  }, [])

  const image = product.featuredImage
    ? product.featuredImage.gatsbyImageData
    : product.images[0].gatsbyImageData

  return (
    <div className={productcard} ref={cardRef}>
      <div>
        <GatsbyImage image={image} alt={product.title} />
      </div>
      {isOverlay ? (
        <ProductCardOverlay
          title={product.title}
          handle={product.handle}
          price={product.variants[0].price}
          vendor={product.vendor}
          productType={product.productType}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default ProductCard
