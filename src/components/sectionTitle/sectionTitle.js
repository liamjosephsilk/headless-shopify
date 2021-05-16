import React from "react"

import {
  sectiontitle,
  sectiontitle__title,
  sectiontitle__subtitle,
} from "./sectionTitle.module.css"

const SectionTitle = ({ title, subtitle }) => {
  return (
    <section className={sectiontitle}>
      <h2 className={sectiontitle__subtitle}>{subtitle}</h2>
      <h1 className={sectiontitle__title}>{title}</h1>
    </section>
  )
}

export default SectionTitle
