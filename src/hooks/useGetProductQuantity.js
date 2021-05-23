import { graphqlClient } from "../utils/client"
import { useQuery } from "react-query"
import { gql } from "graphql-request"

export const useGetProductQuantity = handle => {
  return useQuery(["get-quantity", handle], async () => {
    const getQuantity = await graphqlClient.request(
      gql`
        query productByHandle($handle: String!) {
          productByHandle(handle: $handle) {
            title
            totalInventory
          }
        }
      `,
      { handle }
    )
    return getQuantity
  })
}
