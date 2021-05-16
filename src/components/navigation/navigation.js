import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { navigation__list, navigation__listitem } from "./navigation.module.css"

const Navigation = () => {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    <nav>
      <ul className={navigation__list}>
        {productTypes.map((name, index) => (
          <li className={navigation__listitem} key={index}>
            <Link to={`/products/${name.toLowerCase()}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
