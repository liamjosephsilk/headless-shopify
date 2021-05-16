import React, { useState } from "react"
import { graphql } from "gatsby"

import {
  productpage,
  productpage__title,
  productpage__price,
  productpage__info,
  producpage__content,
} from "./productPage.module.css"

import Layout from "../../../components/layout/layout"
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs"
import ProductImage from "../../../components/productImage/productImage"
import ProductQuantity from "../../../components/productQuantity/productQuantity"
import Button from "../../../components/button/button"

export const query = graphql`
  query($id: String = "") {
    shopifyProduct(id: { eq: $id }) {
      id
      title
      handle
      variants {
        price
        storefrontId
      }
      featuredImage {
        gatsbyImageData(placeholder: "BLURRED", layout: CONSTRAINED)
      }
      vendor
      productType
    }
  }
`

const ProductPage = ({ data: product }) => {
  const [quantity, setQuantity] = useState(0)

  return (
    <Layout>
      <div className={productpage}>
        <div>
          <Breadcrumbs
            currentPage={`/products/${product.shopifyProduct.productType.toLowerCase()}/${
              product.shopifyProduct.handle
            }`}
            currentPageTitle={product.shopifyProduct.title}
            previousPage={`/products/${product.shopifyProduct.productType.toLowerCase()}`}
            previousPageTitle={product.shopifyProduct.productType}
          />
          <ProductImage
            image={product.shopifyProduct.featuredImage.gatsbyImageData}
          />
        </div>
        <div className={producpage__content}>
          <div className={productpage__info}>
            <h1 className={productpage__title}>
              {product.shopifyProduct.title}
            </h1>
            <p className={productpage__price}>
              {product.shopifyProduct.variants[0].price}
            </p>
          </div>

          <ProductQuantity
            quantity={quantity}
            handleIncrease={() =>
              quantity >= 0 ? setQuantity(quantity + 1) : null
            }
            handleDecrease={() =>
              quantity >= 1 ? setQuantity(quantity - 1) : null
            }
          />

          <Button content="Add to Cart" />
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
