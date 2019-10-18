import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { SocialLinksContainer } from './social-links.styles'

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
          <SocialLinksContainer>
            <SocialLink href={links.facebookUrl} className="fab fa-facebook" />
            <SocialLink href={links.twitterUrl} className="fab fa-twitter" />
            <SocialLink
              href={links.instagramUrl}
              className="fab fa-instagram"
            />
            <SocialLink href={links.linkedinUrl} className="fab fa-linkedin" />
            <SocialLink href={links.githubUrl} className="fab fa-github" />
          </SocialLinksContainer>
        </>
      )
    }}
  />
)

export default SocialLinks

const SocialLink = ({ href, className }) => (
  <a
    href={`${href}`}
    rel="noreferrer noopener"
    target="_blank"
    aria-label="link to social media"
  >
    <i className={`${className}`} alt="social link" />
  </a>
)
