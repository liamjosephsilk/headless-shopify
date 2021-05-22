import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  banner__container,
  banner__text,
  banner__close,
} from "./banner.module.css"

const Banner = ({ handleClose }) => {
  const banner = useStaticQuery(graphql`
    query MyQuery {
      prismicHomepage {
        dataRaw
      }
    }
  `)

  const bannerContent = banner.prismicHomepage.dataRaw.home_banner[0].text

  return (
    <div className={banner__container}>
      <p className={banner__text}>{bannerContent}</p>
      <button onClick={handleClose} className={banner__close}>
        X
      </button>
    </div>
  )
}

export default Banner
