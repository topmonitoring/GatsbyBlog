import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import { GatsbyImage,getImage } from "gatsby-plugin-image"

const NotFound = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <h1>404</h1>
      <h1>I'm Afraid Nothing is Here</h1>
      <button>Back to Exploring</button>
    </Layout>
  )
}

export default NotFound

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
