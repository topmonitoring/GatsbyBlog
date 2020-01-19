import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { SocialLinksContainer } from './social-links.styles'
import { SocialMediaIconsReact } from 'social-media-icons-react'

const SocialLinks = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
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
            <SocialIcon href={links.facebookUrl} iconName="facebook" />
            <SocialIcon href={links.twitterUrl} iconName="twitter" />
            <SocialIcon href={links.instagramUrl} iconName="instagram" />
            <SocialIcon href={links.linkedinUrl} iconName="linkedin" />
            <SocialIcon href={links.githubUrl} iconName="github" />
            <SocialIcon
              href={data.site.siteMetadata.siteUrl + '/rss.xml'}
              iconName="rss"
            />
          </SocialLinksContainer>
        </>
      )
    }}
  />
)

export default SocialLinks

const SocialIcon = ({ href, iconName }) => (
  <SocialMediaIconsReact
    borderColor="rgba(0,0,0,0.25)"
    iconColor="rgba(255,255,255,1)"
    backgroundColor="rgba(144, 186, 245,1)"
    iconSize="5"
    roundness="50%"
    size="50"
    icon={`${iconName}`}
    url={`${href}`}
    rel="noreferrer noopener"
    target="_blank"
    aria-label="link to social media"
    alt="social link"
  />
)
