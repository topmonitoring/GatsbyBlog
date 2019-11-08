import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import {
  getBackgroundForNavAndFooter,
  getGlobalForeground,
} from '../theme/colors'
import CustomButton from '../buttons/CustomButton'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        bgr: file(relativePath: { eq: "slide2.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920, maxHeight: 910) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.bgr.childImageSharp.fluid
      return (
        <BackgroundImage
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <StyledInfo>
            <h2>Master of SEO</h2>
            <span>
              Scale your brand or service, by server side rendered content,wich
              meeans all your page content is available to Google and other
              search engines or crawlers.
            </span>
            <CustomButton to="/contact">See Blog Post</CustomButton>
          </StyledInfo>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 90vh;
  position: absolute;
  left: 0px;
  top: -75px;
  background-repeat: no-repeat;
  margin-bottom: -75px;
`
const StyledInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  width: 100vw;
  margin: auto;
  color: ${getGlobalForeground};
  background-color: ${getBackgroundForNavAndFooter};
  padding: 10px;
  opacity: 0.7;
  h2 {
    margin: 0px;
  }
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`
export default StyledBackgroundSection
