import React from "react"
import { Link } from "gatsby"

import { breadcrumb__list, breadcrumb_listitem } from "./breadcrumbs.module.css"

const Breadcrumbs = ({
  currentPage,
  currentPageTitle,
  previousPage,
  previousPageTitle,
}) => {
  return (
    <nav>
      <ul className={breadcrumb__list}>
        <li className={breadcrumb_listitem}>
          <Link to="/">Home</Link>
        </li>
        <li className={breadcrumb_listitem}>
          <Link to={previousPage}>{previousPageTitle}</Link>
        </li>
        <li className={breadcrumb_listitem}>
          <Link to={currentPage}>{currentPageTitle}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Breadcrumbs
