import styled from 'styled-components'
import Img from 'gatsby-image'
import {
  getBackgroundForComments,
  getBackgroundForBlogPost,
  getForegroundForDate,
} from '../../components/theme/colors'

export const PostBagroundImg = styled(Img)`
  height: 70vh;
  width: 100%;
  z-index: -1000;
`

export const BlogPostBody = styled.div`
  padding: 40px;
  margin: 0 auto;
  margin-top: -100px;
  background: ${getBackgroundForBlogPost};
  z-index: 1000;
  max-width: 1080px;
`
export const StyledHeder = styled.h1`
  text-align: center;
  margin: auto;
  font-size: 50px;
  font-weight: 900;
`
export const StyledDate = styled.div`
  text-align: center;
  color: ${getForegroundForDate};
  margin: auto;
  font-weight: 200;
`
export const StyledContentBody = styled.article`
  padding: 50px;
  font-weight: 450;
  align-content: center;
  font-size: 18px;
  h1 {
    font-size: 35px;
    text-align: center;
    color: ${getForegroundForDate};
  }
  img {
    width: 50%;
    height: 50%;
    margin-left: 25%;
  }
  a {
    border-bottom: 3px solid #4799eb;
    text-decoration: none;
    :hover {
      color: #4799eb;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 10px;
    img {
      width: 100%;
      height: 100%;
      margin: 0px;
    }
  }
`

export const StyledComentSection = styled.div`
  width: 80vw;
  margin: 50px auto;
  padding: 50px;
  background: ${getBackgroundForComments};
`
