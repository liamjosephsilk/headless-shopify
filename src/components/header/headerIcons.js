import React from "react"
import { Link } from "gatsby"
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
        <Link to="/checkout">
          <FaShoppingCart className={header__icon} />
        </Link>
        {count === 0 ? <></> : <div className={header__cartcount}></div>}
      </div>
    </ul>
  )
}

export default HeaderIcons
