import React from "react"

import { productlist } from "./productList.module.css"

import ProductCard from "../productCard/productCard"

const ProductList = ({ products }) => {
  return (
    <div className={productlist}>
      {products.edges.map(({ node: product }) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
