import React from "react"
import { FaShoppingCart, FaSearch } from "react-icons/fa"

import {
  header__icons,
  header__iconcontainer,
  header__icon,
  header__cartcount,
} from "./header.module.css"

const HeaderIcons = ({ count, handleClick }) => {
  return (
    <ul className={header__icons}>
      <FaSearch className={header__icon} />

      <div className={header__iconcontainer} onClick={handleClick}>
        <FaShoppingCart className={header__icon} />
        {count === 0 ? <></> : <div className={header__cartcount}></div>}
      </div>
    </ul>
  )
}

export default HeaderIcons
