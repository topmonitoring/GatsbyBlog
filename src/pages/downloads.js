import React from 'react'
import Layout from '../components/layout/layout.component'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'

const DownloadsPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <div>Hello from Downloads Page</div>
    </Layout>
  )
}

export default DownloadsPage

export const pageQuery = graphql`
  query DownloadsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
