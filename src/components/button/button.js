import React from "react"

import { button } from "./button.module.css"

const Button = ({ handleClick, content }) => {
  return (
    <button className={button} onClick={handleClick}>
      {content}
    </button>
  )
}

export default Button
