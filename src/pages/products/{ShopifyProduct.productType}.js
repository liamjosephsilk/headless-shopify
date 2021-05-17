import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SectionTitle from "../../components/sectionTitle/sectionTitle"
import ProductList from "../../components/productList/productList"

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
          handle
          variants {
            price
            storefrontId
          }
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

const ProductTypePage = ({ pageContext, data: products }) => {
  const pageTitle = pageContext.productType

  return (
    <Layout>
      <SectionTitle title={pageTitle} subtitle="Discover" />
      <ProductList products={products.allShopifyProduct} />
    </Layout>
  )
}

export default ProductTypePage
