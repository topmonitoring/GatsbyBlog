import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import FormComponent from '../components/contact-form/contact-form.component'

const ContactPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <div style={{ width: '50vw', margin: 'auto', textAlign: 'center' }}>
        If you are a developer working on some awesome project and need some
        help or a client with high demands for his/her websites. Don't be shy to
        reach out, and we could build something fantastic together.
      </div>
      <hr style={{ width: '80vw' }} />
      <div style={{ width: '50vw', margin: 'auto' }}>
        If you want to say hi, have more questions, or for collaborations here
        is where you can find me: Or just fill the form below
      </div>
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
