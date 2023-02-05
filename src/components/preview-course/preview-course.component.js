import React from 'react'
import { AnimatedCard, Bgr, CardTagName } from './preview-course.styles'
import { useSpring } from 'react-spring'
//import { getImage } from "gatsby-plugin-image"

const interp = i => r =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

const PreviewCourse = ({ node }) => {
  const { radians } = useSpring({
    to: { radians: 2 * Math.PI },
    from: { radians: 0 },
    config: { duration: 3500 },
  })
  return (
    <AnimatedCard
      style={{
        transform: radians.interpolate(interp(node.animation)),
      }}
    >
      <Bgr alt="" image={node.coursePicture.fluid}>
        <CardTagName>{node.courseName}</CardTagName>
      </Bgr>
    </AnimatedCard>
  )
}
export default PreviewCourse
