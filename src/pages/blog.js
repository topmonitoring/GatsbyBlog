import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import PostsPreview from '../components/postsPreview/posts-preview.component'

const BlogIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allContentfulBlogPost.edges')

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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
