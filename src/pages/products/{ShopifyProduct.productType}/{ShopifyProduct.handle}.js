import React from "react"
import { graphql } from "gatsby"

import { productpage } from "./productPage.module.css"

import Layout from "../../../components/layout/layout"
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs"

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
        </div>
        <div>
          <h1>Second Column</h1>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
