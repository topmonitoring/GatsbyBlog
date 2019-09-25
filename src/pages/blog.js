import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import PostsPreview from '../components/preview-blog-posts-list/preview-blog-posts-list.component'

const BlogIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <PostsPreview />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
