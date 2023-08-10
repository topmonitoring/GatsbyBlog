import React from 'react'
import Layout from '../components/layout/layout.component'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo/seo.component'

export const Head = () => (
  <SEO title="downloads page"/>
)

const DownloadsPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
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
