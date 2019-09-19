import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout/layout.component'
import ArticlePreview from '../components/article-preview/article-preview.component'
import Container from '../components/container'
import HomeCover from '../components/homeCover/home-cover.component'

const RootIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allContentfulBlogPost.edges')

  return (
    <Layout location={props.location}>
      <HomeCover />
      <Container>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />

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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
