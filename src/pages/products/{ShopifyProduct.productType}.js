import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"

export const query = graphql`
  query productTypeQuery($productType: String) {
    allShopifyProduct(filter: { productType: { eq: $productType } }) {
      edges {
        node {
          id
          title
          totalInventory
          storefrontId
          productType
          images {
            gatsbyImageData(
              height: 800
              aspectRatio: 4.3
              width: 500
              placeholder: "BLURRED"
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`

const ProductTypePage = ({ pageContext }) => {
  const pageTitle = pageContext.productType
  return (
    <Layout>
      <h1>{pageTitle}</h1>
    </Layout>
  )
}

export default ProductTypePage
