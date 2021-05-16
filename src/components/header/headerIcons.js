import React from "react"
import { FaShoppingCart, FaSearch } from "react-icons/fa"

import { header__icons, header__icon } from "./header.module.css"

const HeaderIcons = () => {
  return (
    <ul className={header__icons}>
      <FaSearch className={header__icon} />
      <FaShoppingCart className={header__icon} />
    </ul>
  )
}

export default HeaderIcons
