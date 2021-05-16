import React from "react"
import { Link } from "gatsby"

import { header, header__title } from "./header.module.css"

import Navigation from "../navigation/navigation"
import HeaderIcons from "./headerIcons"

const Header = ({ title }) => {
  return (
    <header className={header}>
      <Link to="/">
        <p className={header__title}>{title}</p>
      </Link>
      <Navigation />
      <HeaderIcons />
    </header>
  )
}

export default Header
