import styled from 'styled-components'
import Img from 'gatsby-image'
import theme from 'styled-theming'

const getBackground = theme('mode', {
  light: '#fff',
  dark: '#3B4252 ',
})

export const PostBagroundImg = styled(Img)`
  height: 60vh;
  max-height: 900px;
  width: 100%;
  z-index: -1000;
`

export const BlogPostBody = styled.div`
  padding: 40px;
  margin: 0 auto;
  margin-top: -100px;
  background: ${getBackground};
  z-index: 1000;
  max-width: 1180px;
`
export const StyledHeder = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`
