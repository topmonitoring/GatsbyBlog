import React from 'react'
import Layout from '../components/layout/layout.component'
import About from '../components/about-me/about-me.component'

const AboutPage = props => {
  return (
    <Layout location={props.location}>
      <About />
    </Layout>
  )
}

export default AboutPage
