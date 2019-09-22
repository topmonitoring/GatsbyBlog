import React from 'react'
import ArticlePreview from '../article-preview/article-preview.component'
import { StaticQuery, graphql } from 'gatsby'
import { StyledPreview } from './posts-prevew.styles'

const PostsPreview = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
          edges {
            node {
              title
              slug
              publishDate(formatString: "MMMM DD, YYYY")
              tags
              heroImage {
                fluid(maxWidth: 600, maxHeight: 300, resizingBehavior: SCALE) {
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
    `}
    render={data => {
      const posts = data.allContentfulBlogPost.edges
      return (
        <StyledPreview>
          {posts.map(({ node }) => {
            return <ArticlePreview article={node} key={node.slug} />
          })}
        </StyledPreview>
      )
    }}
  />
)

export default PostsPreview
