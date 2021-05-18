import React from "react"

import { StoreContextProvider } from "./src/contexts/storeContext"

export const wrapRootElement = ({ element }) => {
  return <StoreContextProvider>{element}</StoreContextProvider>
}
