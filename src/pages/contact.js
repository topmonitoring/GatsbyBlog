import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import FormComponent from '../components/contact-form/contact-form.component'
import SocialMediaLinks from '../components/social-links/social-links.component'

const ContactPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <h1
        style={{
          width: '50vw',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        Contact me
      </h1>
      <hr style={{ width: '80vw' }} />
      <div
        style={{
          width: '50vw',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <SocialMediaLinks />
      </div>
      <hr style={{ width: '80vw' }} />
      <FormComponent />
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
