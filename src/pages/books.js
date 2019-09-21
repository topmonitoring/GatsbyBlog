import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'

const BooksPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
    </Layout>
  )
}

export default BooksPage

export const pageQuery = graphql`
  query BooksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
