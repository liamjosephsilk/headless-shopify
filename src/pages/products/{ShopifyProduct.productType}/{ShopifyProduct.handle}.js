import React, { useState } from "react"
import { graphql } from "gatsby"
import { useGetProductQuantity } from "../../../hooks/useGetProductQuantity"

import {
  productpage,
  productpage__title,
  productpage__price,
  productpage__info,
  producpage__content,
  productpage__quantity,
} from "./productPage.module.css"

// Components

import Layout from "../../../components/layout/layout"
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs"
import ProductImage from "../../../components/productImage/productImage"
import ProductQuantity from "../../../components/productQuantity/productQuantity"
import Button from "../../../components/button/button"

// Contexts
import { useAddItemToCart } from "../../../contexts/storeContext"

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
  const { data, error, isLoading, isSuccess } = useGetProductQuantity(
    product.shopifyProduct.handle
  )

  const [quantity, setQuantity] = useState(0)
  const addToCart = useAddItemToCart()
  const variant = product.shopifyProduct.variants[0].storefrontId

  const handleAddedToCart = () => {
    addToCart(variant, quantity)
    setQuantity(0)
  }

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
            alt={product.shopifyProduct.title}
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
            {data ? (
              <p className={productpage__quantity}>
                {data.productByHandle.totalInventory} Left In Stock
              </p>
            ) : (
              <p className={productpage__quantity}></p>
            )}
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

          <Button content="Add to Cart" handleClick={handleAddedToCart} />
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
