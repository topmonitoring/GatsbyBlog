import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import HomeCover from '../components/home-cover/home-cover.component'
import PreviewCourses from '../components/preview-courses/preview-courses.component'
import Resources from '../components/resources/resources.component'

const RootIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <HomeCover></HomeCover>
      {/* <PreviewCourses /> */}
      <Resources />
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
