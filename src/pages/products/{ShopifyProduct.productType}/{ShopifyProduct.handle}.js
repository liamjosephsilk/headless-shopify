import React from "react"
import { graphql } from "gatsby"

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
    <div>
      <h1>{product.shopifyProduct.title}</h1>
    </div>
  )
}

export default ProductPage
