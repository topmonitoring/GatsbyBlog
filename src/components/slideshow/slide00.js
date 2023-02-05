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
      bgr: file(relativePath: {eq: "slide00.png"}) {
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
          alt="slide1"
        />
          <StyledInfo>
            <h2>Welcome to Pirete Cactus!!!</h2>
            <span>
              First time here? See all about this website and why it exsist from
              the introductory blog post!
            </span>
            <CustomButton to="/blog/welcome-to-pirate-cactus">
              To the introductory blogpost
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
