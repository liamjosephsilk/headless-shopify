import React from "react"
import { Link } from "gatsby"

import { header, header__title } from "./header.module.css"

import Navigation from "../navigation/navigation"
import HeaderIcons from "./headerIcons"

import { useCartCount } from "../../contexts/storeContext"

const Header = ({ title }) => {
  const count = useCartCount()

  return (
    <header className={header}>
      <Link to="/">
        <p className={header__title}>{title}</p>
      </Link>
      <Navigation />
      <HeaderIcons count={count} />
    </header>
  )
}

export default Header
