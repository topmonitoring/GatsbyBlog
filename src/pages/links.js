import React from 'react'
import Layout from '../components/layout/layout.component'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'

const LinksPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <div>Hello from Links Page</div>
    </Layout>
  )
}

export default LinksPage

export const pageQuery = graphql`
  query LinksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
