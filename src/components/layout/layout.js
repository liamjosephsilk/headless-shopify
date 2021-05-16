import React from "react"

import { pagecontent } from "./layout.module.css"

import Header from "../header/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header title="Skate Shop" />
      <main className={pagecontent}>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
