import React, { useState } from "react"

import { pagecontent } from "./layout.module.css"

import Header from "../header/header"
import Banner from "../banner/banner"

const Layout = ({ children }) => {
  const [isBanner, setIsBanner] = useState(true)

  const closeBanner = () => {
    setIsBanner(false)
  }
  return (
    <>
      {isBanner ? <Banner handleClose={closeBanner} /> : <></>}

      <Header title="Skate Shop" />
      <main className={pagecontent}>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
