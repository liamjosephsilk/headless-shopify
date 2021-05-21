import React from "react"

import { StoreContextProvider } from "./src/contexts/storeContext"
import "./src/styles/index.css"

export const wrapRootElement = ({ element }) => {
  return <StoreContextProvider>{element}</StoreContextProvider>
}
