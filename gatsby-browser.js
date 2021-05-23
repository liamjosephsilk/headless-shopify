import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import { StoreContextProvider } from "./src/contexts/storeContext"
import "./src/styles/index.css"

const queryClient = new QueryClient()

export const wrapRootElement = ({ element }) => {
  return (
    <StoreContextProvider>
      <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
    </StoreContextProvider>
  )
}
