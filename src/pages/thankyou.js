import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout/layout.component'
import { SEO } from '../components/seo/seo.component'

export const Head = () => (
  <SEO title="Thank you page"/>
)

const NotFound = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <h1>Thanks for your interest</h1>
      <h1>I will contact you shortly</h1>
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
