import styled from 'styled-components'
import Img from 'gatsby-image'
import theme from 'styled-theming'

const getBackground = theme('mode', {
  light: '#E5E9F0',
  dark: '#3B4252 ',
})

export const StyledPreviewImg = styled(Img)`
  display: block;
  width: 100%;
  height: 250px;
  grid-area: img;
`
export const StyledDate = styled.div`
  grid-area: date;
`
export const StyledDiscription = styled.p`
  margin: 2px 10px;
  font-size: 16px;
  grid-area: discription;
`
export const PreviewTitle = styled.h3`
  position: absolute;
  width: 70%;
  height: 30px;
  font-size: 16px;
  margin-top: 200px;
  background-color: aqua;
  grid-area: 'title';
  clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0 100%, 0 0);
  text-align: center;
  color: black;
`
export const Tag = styled.p`
  width: 70px;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #a0a0a0;
  margin: 2px;
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
  grid-area: tag;
`

export const ArticleInnerGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    'img img img'
    'title title title'
    'discription discription discription '
    'tag tag date';
`

export const ArticleDisplayContainer = styled.article`
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 15px;
  background-color: ${getBackground};

  flex: 0 0 calc(50% - 33px);
`
