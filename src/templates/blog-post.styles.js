import styled from 'styled-components'
import Img from 'gatsby-image'

export const PostBagroundImg = styled(Img)`
  height: 60vh;
  max-height: 900px;
  width: 100%;
  z-index: -1000;
`

export const BlogPostBody = styled.div`
  padding: 40px;
  margin-top: -100px;
  background: #fff;
  z-index: 1000;
`
export const StyledHeder = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`
