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
          title
          company
          email
          phone
          shortBio {
            shortBio
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
            <p>{author.shortBio.shortBio}</p>
          </StyledAboutInfo>
          <StyledImg alt={author.name} fluid={author.heroImage.fluid} />
        </StyledAboutSection>
      )
    }}
  />
)

export default About
