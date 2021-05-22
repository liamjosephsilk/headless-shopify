import React from "react"
import { RichText } from "prismic-reactjs"

import {
  container,
  text__content,
  text__image,
} from "./ImageWithText.module.css"

// import Button from "../button/button"

const ImageWithText = ({ slice }) => {
  return (
    <section className={container}>
      <div className={text__image}>image placeholder</div>
      <div className={text__content}>
        <RichText render={slice.primary.content.raw} />
      </div>
    </section>
  )
}

export default ImageWithText
