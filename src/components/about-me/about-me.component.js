import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  StyledAboutSection,
  StyledAboutInfo,
  StyledImg,
  StyledName,
  StyledTitle,
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
        <>
          <StyledAboutSection>
            <StyledTitle>About The Author</StyledTitle>
            <StyledName>{author.name}</StyledName>
            <StyledImg alt={author.name} fluid={author.heroImage.fluid} />
            <StyledAboutInfo
              dangerouslySetInnerHTML={{
                __html: author.aboutAuthor.childMarkdownRemark.html,
              }}
            />
          </StyledAboutSection>
        </>
      )
    }}
  />
)

export default About
