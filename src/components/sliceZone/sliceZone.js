import React from "react"
import CTABlock from "../slices/CTABlock"
import ImageWithText from "../slices/imageWithText"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    cta_block: CTABlock,
    image_text_block: ImageWithText,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }

    return null
  })

  return <div>{sliceZoneContent}</div>
}

export default SliceZone
