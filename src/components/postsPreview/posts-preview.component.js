import React from 'react'
import ArticlePreview from '../article-preview/article-preview.component'
import { StaticQuery, graphql } from 'gatsby'

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
    `}
    render={data => {
      const posts = data.allContentfulBlogPost.edges
      return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '10px',
            maxWidth: '70vw',
            background: '#fff',
            margin: 'auto',
          }}
        >
          {posts.map(({ node }) => {
            return <ArticlePreview article={node} key={node.slug} />
          })}
        </div>
      )
    }}
  />
)

export default PostsPreview
