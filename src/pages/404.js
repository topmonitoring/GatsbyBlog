import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'

const NotFound = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <h1>404</h1>
      <h1>PAGE NOT FOUND</h1>
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
