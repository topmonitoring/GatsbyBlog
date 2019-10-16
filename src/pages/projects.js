import React from 'react'
import Layout from '../components/layout/layout.component'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'

const ProjectsPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <div>Hello from Projects Page</div>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
