import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

export const PageQuery = graphql`
  query PageQuery($url: String = "") {
    prismicPage(url: { eq: $url }) {
      uid
    }
  }
`

const Page = ({ data }) => {
  const page = data.prismicPage

  return (
    <Layout>
      <h1>{page.uid}</h1>
    </Layout>
  )
}

export default Page
