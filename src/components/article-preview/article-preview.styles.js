import styled from 'styled-components'
import Img from 'gatsby-image'

export const StyledPreviewImg = styled(Img)`
  display: block;
  width: 100%;
  height: 60%;
`
export const StyledDiscription = styled.p`
  margin: 2px 2px;
  font-size: 16px;
`
export const PreviewTitle = styled.h3`
  font-size: 1.5em;
  height: 10%;
  margin: 2px;
`
export const Tag = styled.p`
  width: 30%;
  color: #a0a0a0;
  text-decoration: none;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #a0a0a0;
  margin: 2px;
`
export const ArticleContainer = styled.article`
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px;
  flex: 0 0 calc(90%);
  text-align: center;

  :nth-child(5n + 1),
  :nth-child(5n + 2) {
    flex: 0 0 calc(50% - 30px);
  }
  :nth-child(5n + 3),
  :nth-child(5n + 4),
  :nth-child(5n + 5) {
    flex: 0 0 calc(33.33% - 30px);
  }
`
