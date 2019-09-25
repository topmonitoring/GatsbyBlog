import React from 'react'
import { useSpring } from 'react-spring'
import { AnimatedCard, AnimatedCardContainer } from './preview-courses.styles'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const items = [22, 44, 66, 32]
const interp = i => r =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

const PreviewCourses = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulCourses {
          edges {
            node {
              animation
              courseName
              coursePicture {
                fluid(maxWidth: 400, maxHeight: 300, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const courses = data.allContentfulCourses.edges
      const { radians } = useSpring({
        to: async next => {
          while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
      })
      return (
        <AnimatedCardContainer>
          {courses.map(({ node }) => (
            <AnimatedCard
              style={{
                transform: radians.interpolate(interp(node.animation)),
              }}
              key={node.courseName}
            >
              <Img alt="" fluid={node.coursePicture.fluid} />
            </AnimatedCard>
          ))}
        </AnimatedCardContainer>
      )
    }}
  />
)

export default PreviewCourses
