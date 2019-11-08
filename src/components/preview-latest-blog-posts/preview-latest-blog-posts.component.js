import React from 'react'
import ArticlePreview from '../preview-blog-post/preview-blog-post.component'
import { StaticQuery, graphql, Link } from 'gatsby'
import {
  StyledLatestBlogPostsGrid,
  PreviewLatestBlogPostsTitle,
  SeeAllBlogPosts,
} from './preview-latest-blog-posts.styles'

const LatestBlogPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 3
        ) {
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
              body {
                childMarkdownRemark {
                  excerpt
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
        <>
          <PreviewLatestBlogPostsTitle>
            Latest Blog Posts
          </PreviewLatestBlogPostsTitle>
          <StyledLatestBlogPostsGrid>
            {posts.map(({ node }) => {
              return <ArticlePreview article={node} key={node.slug} />
            })}
          </StyledLatestBlogPostsGrid>

          <SeeAllBlogPosts to="/blog">See All</SeeAllBlogPosts>
        </>
      )
    }}
  />
)

export default LatestBlogPosts
