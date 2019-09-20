import styled from 'styled-components'
import Img from 'gatsby-image'

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
  margin: 2px 2px;
  font-size: 16px;
  grid-area: discription;
`
export const PreviewTitle = styled.h3`
  font-size: 20px;
  height: 10%;
  margin: 2px;
  grid-area: 'title';
`
export const Tag = styled.p`
  width: 70px;
  color: #a0a0a0;
  text-decoration: none;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #a0a0a0;
  margin: 2px;
  grid-area: tag;
`
export const ArticleInnerGridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'img img img'
    'title title date'
    'discription discription discription '
    'tag tag tag';
`

export const ArticleDisplayContainer = styled.article`
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 15px;

  flex: 0 0 calc(90%);

  :nth-child(5n + 1),
  :nth-child(5n + 2) {
    flex: 0 0 calc(50% - 33px);
  }
  :nth-child(5n + 3),
  :nth-child(5n + 4),
  :nth-child(5n + 5) {
    flex: 0 0 calc(33.33% - 32px);
  }
`
