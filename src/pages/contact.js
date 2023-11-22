import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout/layout.component'
import FormComponent from '../components/contact-form/contact-form.component'
import SocialMediaLinks from '../components/social-links/social-links.component'
import { SEO } from '../components/seo/seo.component'

export const Head = () => (
  <SEO title="contact page"/>
)

const ContactPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <h1
        style={{
          width: '50vw',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        Contact me
      </h1>
      <p style={{ textAlign:"center", width: '80vw',margin:"auto" }}>If you find this blog usefull or you need some help with you're buisness, project, or client. Do not hasitate to drop me a line</p>
      <hr style={{ width: '80vw',height:'2px',border:'none',backgroundColor: 'rgb(102, 155, 188)' }} />
      <div
        style={{
          width: '50vw',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <SocialMediaLinks />
      </div>
      <hr style={{ width: '80vw',height:'2px',border:'none',backgroundColor: 'rgb(102, 155, 188)' }} />
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
