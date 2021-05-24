import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SliceZone from "../components/sliceZone/sliceZone"
import Seo from "../components/seo"

export const PageQuery = graphql`
  query PageQuery($url: String = "") {
    prismicPage(url: { eq: $url }) {
      uid
      data {
        body {
          ... on PrismicPageBodyCtaBlock {
            id
            slice_type
            primary {
              block_title {
                raw
              }
              button_title {
                raw
              }
            }
          }
          ... on PrismicPageBodyImageTextBlock {
            id
            slice_type
            primary {
              content {
                raw
              }
              image {
                alt
                dimensions {
                  height
                  width
                }
                fluid {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

const Page = ({ data }) => {
  const page = data.prismicPage
  const document = page.data.body

  return (
    <Layout>
      <Seo
        title={page.uid.toUpperCase()}
        description={`Skate Shop ${page.uid} page`}
      />
      <h1>{page.uid}</h1>
      <SliceZone sliceZone={document} />
    </Layout>
  )
}

export default Page
