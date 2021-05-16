import React from "react"
import { graphql } from "gatsby"

import { productpage } from "./productPage.module.css"

import Layout from "../../../components/layout/layout"

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
    }
  }
`

const ProductPage = ({ data: product }) => {
  return (
    <Layout>
      <div className={productpage}>
        <div></div>
        <div>
          <h1>Second Column</h1>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
