import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {getImage} from 'gatsby-plugin-image'
import {
  StyledAboutSection,
  StyledAboutInfo,
  StyledImg,
  StyledName,
  StyledTitle,
} from './about-me.styles'

const About = () => {
    const  person  = useStaticQuery(
    graphql`
    query {
      contentfulPerson {
        name
        aboutAuthor {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImage(width: 1920, height: 1080)
        }
      }
    }
    `)
      return (
        <>
          <StyledAboutSection>
            <StyledTitle>About The Author</StyledTitle>
            <StyledName>{person.contentfulPerson.name}</StyledName>
            <StyledImg alt={person.contentfulPerson.name} image={getImage(person.contentfulPerson.image)} />
            <StyledAboutInfo dangerouslySetInnerHTML={{ __html: person.contentfulPerson.aboutAuthor.childMarkdownRemark.html }}/>
          </StyledAboutSection>
        </>
     )
}
  
    export default About;

