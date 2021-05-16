import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout/layout"

export const query = graphql`
  query($id: String = "") {
    shopifyProduct(id: { eq: $id }) {
      id
      title
    }
  }
`

const ProductPage = ({ data: product }) => {
  return (
    <Layout>
      <h1>{product.shopifyProduct.title}</h1>
    </Layout>
  )
}

export default ProductPage
