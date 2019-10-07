import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import HomeCover from '../components/home-cover/home-cover.component'
import PreviewCourses from '../components/preview-courses/preview-courses.component'
import Resources from '../components/preview-resources/preview-resources.component'
import LatestBlogPosts from '../components/preview-latest-blog-posts/preview-latest-blog-posts.component'

const RootIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <HomeCover></HomeCover>
      <PreviewCourses />
      <LatestBlogPosts />

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
