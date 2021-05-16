import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout/layout"
import ProductList from "../components/productList/productList"
import SectionTitle from "../components/sectionTitle/sectionTitle"

export const ProductQuery = graphql`
  query allProducts {
    allShopifyProduct {
      edges {
        node {
          id
          title
          vendor
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

const IndexPage = data => (
  <Layout>
    <Seo title="Home" />
    <SectionTitle title="New In" subtitle="Discover" />
    <ProductList products={data.data.allShopifyProduct} />
  </Layout>
)

export default IndexPage
