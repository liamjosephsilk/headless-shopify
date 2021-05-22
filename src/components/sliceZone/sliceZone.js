import React from "react"

const SlizeZone = ({ sliceZone }) => {
  return sliceZone.map((slice, index) => <p key={index}>{slice.slice_type}</p>)
}

export default SliceZone
