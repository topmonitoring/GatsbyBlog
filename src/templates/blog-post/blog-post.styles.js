import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import {
  getBackgroundForComments,
  getBackgroundForBlogPost,
  getForegroundForDate,
} from '../../components/theme/colors'

export const PostBagroundImg = styled(GatsbyImage)`
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
  border-radius: 10px;
  article {
    :first-letter {
      font-family: Georgia, serif;
      float: left;
      font-size: 7.125em;
      font-weight: bold;
      line-height: 0.65;
      margin: 0;
      padding: 0.05em 0.1em 0 0;
      -webkit-initial-letter: 3 2;
      initial-letter: 3 2;
    }
  }
`
export const StyledHeder = styled.h1`
  text-align: center;
  margin: auto;
  font-size: 80px;
  font-weight: 900;
`
export const StyledDate = styled.div`
  color: ${getForegroundForDate};
  font-weight: 200;
  margin: auto;
  margin-right: 5px;
`
export const StyledReadTime = styled.div`
  font-weight: 500;
  margin: auto;
  margin-left: 5px;
`
export const StyledContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
`

export const StyledContentBody = styled.article`
  padding: 50px;
  font-weight: 300;
  align-content: center;
  font-size: 20px;
  line-height: 30px;
  strong {
    font-weight: 900;
  }
  blockquote {
    line-height: 44px;
    max-width: 660px;
    margin: 58px 0 58px 10px;
    padding: 10px 0 10px 10px;
    border-left: 5px solid;
  }
  h1 {
    font-size: 35px;
    text-align: center;
    font-weight: 800;
  }
  h2 {
    text-decoration: underline;
    font-weight: 100;
    letter-spacing: 0.2em;
    font-size: 40px;
  }
  img {
    width: 70%;
    height: 70%;
    margin-left: 15%;
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
