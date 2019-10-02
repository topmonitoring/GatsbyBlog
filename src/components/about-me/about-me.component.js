import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  StyledAboutSection,
  StyledAboutInfo,
  StyledImg,
  StyledName,
} from './about-me.styles'

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        person: contentfulPerson {
          name
          aboutAuthor {
            childMarkdownRemark {
              html
            }
          }
          heroImage: image {
            fluid(maxWidth: 1024, maxHeight: 1920, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      const author = data.person
      return (
        <StyledAboutSection>
          <StyledAboutInfo>
            <StyledName>{author.name}</StyledName>
            <div
              dangerouslySetInnerHTML={{
                __html: author.aboutAuthor.childMarkdownRemark.html,
              }}
            ></div>
          </StyledAboutInfo>
          <StyledImg alt={author.name} fluid={author.heroImage.fluid} />
        </StyledAboutSection>
      )
    }}
  />
)

export default About
