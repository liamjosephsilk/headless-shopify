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
      <div className={navigation__list}>
        {productTypes.map((name, index) => (
          <div className={navigation__listitem} key={index}>
            <Link
              to={`/products/${name.toLowerCase()}`}
              aria-label={`Go to ${name} products`}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
