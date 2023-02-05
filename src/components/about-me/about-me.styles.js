import styled from 'styled-components'
import {GatsbyImage} from 'gatsby-plugin-image'
import { getBackgroundForBlogPostsPreview } from '../theme/colors'

export const StyledAboutSection = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${getBackgroundForBlogPostsPreview};
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
  }
`
export const StyledAboutInfo = styled.div`
  margin: 20px auto;
  padding: 50px;
  font-size: 18px;
  h1 {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 5px;
  }
`
export const StyledImg = styled(GatsbyImage)`
  height: 600px;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 800px) {
    height: 250px;
  }
`
export const StyledName = styled.h3`
  text-align: center;
`
export const StyledTitle = styled.h1`
  text-align: center;
`
