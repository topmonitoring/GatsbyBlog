import React from 'react'
import Layout from '../components/layout/layout.component'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const AboutPage = props => {
  const [author] = get(props, 'data.allContentfulPerson.edges')
  return (
    <Layout location={props.location}>
      <div>
        <Img
          alt={author.node.name}
          fluid={author.node.heroImage.fluid}
          style={{ height: '80vh', width: '70vw', margin: 'auto' }}
        />
        <div>
          <h3>{author.node.name}</h3>
          <p>{author.node.title}</p>
          <p>{author.node.shortBio.shortBio}</p>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AuthorQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1024
              maxHeight: 1920
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default AboutPage
