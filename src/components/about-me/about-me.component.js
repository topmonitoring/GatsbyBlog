import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  StyledAboutSection,
  StyledAboutInfo,
  StyledImg,
  StyledName,
} from './about-me.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        person: contentfulPerson {
          name
          aboutAuthor {
            json
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
            <div>
              {documentToReactComponents(author.aboutAuthor.json, {
                renderNode: {
                  [BLOCKS.HEADING_2]: (_node, children) => (
                    <h2 style={{ color: 'red' }}>{children}</h2>
                  ),
                },
              })}
            </div>
          </StyledAboutInfo>
          <StyledImg alt={author.name} fluid={author.heroImage.fluid} />
        </StyledAboutSection>
      )
    }}
  />
)

export default About
