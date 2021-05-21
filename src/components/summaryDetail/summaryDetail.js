import React from "react"

import { summaryDetail } from "./summaryDetail.module.css"

const SummaryDetail = ({ title, amount }) => {
  return (
    <div className={summaryDetail}>
      <p>{title}</p>
      <p>{amount}</p>
    </div>
  )
}

export default SummaryDetail
