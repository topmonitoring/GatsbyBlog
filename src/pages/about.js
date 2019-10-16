import React from 'react'
import Layout from '../components/layout/layout.component'
import About from '../components/about-me/about-me.component'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import EmailSubscribeForm from '../components/subscribe-form/subscribe-form.component'
import { graphql } from 'gatsby'

const AboutPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <About />
      <EmailSubscribeForm />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
