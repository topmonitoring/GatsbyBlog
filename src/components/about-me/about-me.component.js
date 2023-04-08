import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {getImage} from 'gatsby-plugin-image'
import {
  StyledAboutSection,
  StyledAboutInfo,
  StyledImg,
  StyledName,
  StyledTitle,
  StyledAboutGrid,
  StyledAboutMeInfo
} from './about-me.styles'

const About = () => {
    const  person  = useStaticQuery(
    graphql`
    query {
      contentfulPerson {
        name
        aboutInfo {
          childMarkdownRemark {
            html
          }
        }
        aboutAuthor {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImage(width: 500, height: 500)
        }
      }
    }
    `)
      return (
        <>
          <StyledAboutSection>
            <StyledTitle>About The Author</StyledTitle>
            <StyledAboutGrid>
            <StyledAboutMeInfo dangerouslySetInnerHTML={{ __html: person.contentfulPerson.aboutInfo.childMarkdownRemark.html }}/>
            <StyledImg alt={person.contentfulPerson.name} image={getImage(person.contentfulPerson.image)} />
            </StyledAboutGrid>
            <StyledAboutInfo dangerouslySetInnerHTML={{ __html: person.contentfulPerson.aboutAuthor.childMarkdownRemark.html }}/>
          </StyledAboutSection>
        </>
     )
}
  
    export default About;

