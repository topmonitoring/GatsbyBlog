import React from 'react'
import {
  AnimatedCardContainer,
  PreviewCoursesTitle,
} from './preview-courses.styles'
import {useStaticQuery, graphql } from 'gatsby'
import PreviewCourse from '../preview-course/preview-course.component'

const PreviewCourses = () => {
  const data =useStaticQuery(graphql`
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
    `)
    const courses=data.allContentfulCourses.edges
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
    }
 


export default PreviewCourses
