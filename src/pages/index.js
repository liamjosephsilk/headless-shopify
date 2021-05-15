import * as React from "react"
import { graphql, Link } from "gatsby"

import Seo from "../components/seo"

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
            gatsbyImageData(placeholder: "BLURRED")
          }
        }
      }
    }
  }
`

const IndexPage = data => (
  <div>
    <Seo title="Home" />
    <h1>Home Page</h1>
    {data.data.allShopifyProduct.edges.map(({ node: product }) => (
      <div>
        <p>{product.title}</p>
        <Link
          to={`products/${product.productType.toLowerCase()}/${product.handle}`}
        >
          {product.title}
        </Link>
      </div>
    ))}
  </div>
)

export default IndexPage
