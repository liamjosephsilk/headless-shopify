import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import ProductList from "../../components/productList/productList"
import SectionTitle from "../../components/sectionTitle/sectionTitle"

export const query = graphql`
  query productTypeQuery($productType: String) {
    allShopifyProduct(filter: { productType: { eq: $productType } }) {
      edges {
        node {
          id
          title
          productType
          handle
          variants {
            price
            storefrontId
          }
          featuredImage {
            gatsbyImageData(placeholder: "BLURRED", layout: CONSTRAINED)
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
