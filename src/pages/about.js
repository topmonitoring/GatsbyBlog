import React from 'react'
import Layout from '../components/layout/layout.component'
import About from '../components/about-me/about-me.component'
import get from 'lodash/get'
import EmailSubscribeForm from '../components/subscribe-form/subscribe-form.component'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo/seo.component'

export const Head = () => (
  <SEO title="about page"/>
)

const AboutPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
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
