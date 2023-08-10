import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout/layout.component'
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import { SEO } from '../components/seo/seo.component'

const NotFound = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <h1>404</h1>
      <h1>I'm Afraid Nothing is Here</h1>
      <button>Back to Exploring</button>
    </Layout>
  )
}

export default NotFound

export const Head = () => (
  <SEO title="404 page"/>
)

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
