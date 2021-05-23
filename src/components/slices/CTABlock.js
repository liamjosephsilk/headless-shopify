import React from "react"
import { RichText } from "prismic-reactjs"

import { CTA, CTA__text } from "./CTABlock.module.css"

import Button from "../button/button"

const CTABlock = ({ slice }) => {
  return (
    <div className={CTA}>
      <h1 className={CTA__text}>
        {RichText.asText(slice.primary.block_title.raw)}
      </h1>

      <Button content={RichText.asText(slice.primary.button_title.raw)} />
    </div>
  )
}

export default CTABlock
