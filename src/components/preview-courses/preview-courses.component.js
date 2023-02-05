import React from 'react'
import {
  AnimatedCardContainer,
  PreviewCoursesTitle,
} from './preview-courses.styles'
import {StaticQuery, graphql } from 'gatsby'
import PreviewCourse from '../preview-course/preview-course.component'

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
              gatsbyImageData
              }
            }
          }
        }
      }
    `}
    render={data => {
      const courses = data.allContentfulCourses.edges
      return (
        <>
          <PreviewCoursesTitle>Courses</PreviewCoursesTitle>
          <AnimatedCardContainer>
            {courses.map(({ node }) => (
              <PreviewCourse key={node.courseName} node={{ /*...node*/ }} />
            ))}
          </AnimatedCardContainer>
        </>
      )
    }}
  />
)

export default PreviewCourses
