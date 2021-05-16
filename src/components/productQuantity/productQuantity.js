import React from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

import {
  productquantity,
  productquantity__quantity,
} from "./productQuantity.module.css"

const ProductQuantity = ({ quantity, handleIncrease, handleDecrease }) => {
  return (
    <div className={productquantity}>
      <button onClick={handleDecrease}>
        <FaMinus />
      </button>
      <p className={productquantity__quantity}>{quantity}</p>
      <button onClick={handleIncrease}>
        <FaPlus />
      </button>
    </div>
  )
}

export default ProductQuantity
