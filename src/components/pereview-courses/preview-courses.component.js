import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { AnimatedCard, AnimatedCardContainer } from './preview-courses.styles'

const items = [22, 44, 66, 32]
const interp = i => r =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

const PreviewCourses = () => {
  const [isAnimated, setAnimated] = useState(true)

  const { radians } = useSpring({
    to: async next => {
      while (true) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })
  return (
    <AnimatedCardContainer>
      {items.map(i => (
        <AnimatedCard
          key={i}
          style={{ transform: radians.interpolate(interp(i)) }}
        />
      ))}
    </AnimatedCardContainer>
  )
}

export default PreviewCourses
