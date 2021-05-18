import React from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

import {
  productquantity,
  productquantity__quantity,
  productquantity__button,
} from "./productQuantity.module.css"

const ProductQuantity = ({ quantity, handleIncrease, handleDecrease }) => {
  return (
    <div className={productquantity}>
      <button className={productquantity__button} onClick={handleDecrease}>
        <FaMinus />
      </button>
      <p className={productquantity__quantity}>{quantity}</p>
      <button className={productquantity__button} onClick={handleIncrease}>
        <FaPlus />
      </button>
    </div>
  )
}

export default ProductQuantity
