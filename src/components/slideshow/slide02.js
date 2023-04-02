import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import {getImage,GatsbyImage} from 'gatsby-plugin-image'
import {
  getBackgroundForNavAndFooter,
  getGlobalForeground,
} from '../theme/colors'
import CustomButton from '../buttons/CustomButton'

const BackgroundSection = ({ className, children }) => {
  const imageData=useStaticQuery(graphql`
    {
      bgr: file(name: {eq: "slide2"}) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 1920, height: 910)
        }
      }
    }
    `)
      return (
        <>
        <GatsbyImage
          className={className}
          image={getImage(imageData.bgr)}
          backgroundColor={`#040e18`}
          alt="slide02"
        />
           <StyledInfo>
            <h2>Master of SEO</h2>
            <span>
              Scale your brand or service, by server side rendered content,wich
              meeans all your page content is available to Google and other
              search engines or crawlers.
            </span>
            <CustomButton to="/blog/how-pre-rendering-content-improves-seo">
              See Blog Post
            </CustomButton>
          </StyledInfo>
          {children}
        </>
      )
    }

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
