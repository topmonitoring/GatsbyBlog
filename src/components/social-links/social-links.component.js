import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const SocialLinks = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulPerson {
          edges {
            node {
              facebookUrl
              twitterUrl
              instagramUrl
              linkedinUrl
              githubUrl
            }
          }
        }
      }
    `}
    render={data => {
      const links = data.allContentfulPerson.edges[0].node
      return (
        <>
          <div>
            <a
              href={links.facebookUrl}
              rel="noreferrer noopener"
              target="_blank"
              aria-label="link to social media"
            >
              <i className="fab fa-facebook" alt="facebook link" />
            </a>
          </div>
        </>
      )
    }}
  />
)

export default SocialLinks
