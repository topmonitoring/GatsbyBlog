import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { getBackgroundForArticlePreview } from '../theme/colors'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        bgr: allFile(filter: { name: { eq: "subscribebaground2" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 501) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.bgr.edges[0].node.childImageSharp.fluid
      return (
        <BackgroundImage className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  padding: 50px;
  background-color: ${getBackgroundForArticlePreview};
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 800px) {
    padding: 20px 0px;
    flex-direction: column;
  }
`
export default StyledBackgroundSection
