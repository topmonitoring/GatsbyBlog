import React from 'react'
import { AnimatedCard, Bgr, CardTagName } from './preview-course.styles'
import { getImage } from "gatsby-plugin-image"

const PreviewCourse = ({ node }) => {
  return (
    <AnimatedCard>
      <Bgr alt="" image={getImage(node.coursePicture)}/>
      <CardTagName>{node.courseName}</CardTagName>
    </AnimatedCard>
  )
}
export default PreviewCourse
