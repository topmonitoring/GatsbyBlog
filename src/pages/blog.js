import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import ArticlePreview from '../components/article-preview/article-preview.component'
import Container from '../components/container'

const BlogIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allContentfulBlogPost.edges')

  return (
    <Layout location={props.location}>
      <Container>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />

          <h2 className="section-headline">Recent articles</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '10px',
              maxWidth: '70vw',
            }}
          >
            {posts.map(({ node }) => {
              return <ArticlePreview article={node} key={node.slug} />
            })}
          </div>
        </div>
      </Container>
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
