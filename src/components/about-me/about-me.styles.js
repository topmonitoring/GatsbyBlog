import styled from 'styled-components'
import Img from 'gatsby-image'
import { getBackgroundForBlogPostsPreview } from '../theme/colors'

export const StyledAboutSection = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${getBackgroundForBlogPostsPreview};
  @media screen and (max-width: 800px) {
    flex-direction: column;
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
    width: 80vw;
  }
`
export const StyledImg = styled(Img)`
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
