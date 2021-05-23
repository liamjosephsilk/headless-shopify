import { GraphQLClient } from "graphql-request"

const STOREFRONT = process.env.GATSBY_STOREFRONT_ACCESS_TOKEN
const SHOP = process.env.GATSBY_SHOPIFY_STORE_URL
const STORE_URL = `https://${SHOP}/api/2021-04/graphql.json`

export const graphqlClient = new GraphQLClient(STORE_URL, {
  headers: {
    "X-Shopify-Storefront-Access-Token": `${STOREFRONT}`,
  },
})
