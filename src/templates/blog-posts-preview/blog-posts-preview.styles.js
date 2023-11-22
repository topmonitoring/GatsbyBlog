import styled from 'styled-components'
import { getBackgroundForBlogPostsPreview } from '../../components/theme/colors'

export const StyledPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 65vw;
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`
export const StyledHeding = styled.h1`
  text-align: center;
`
export const StyledHR = styled.hr`
  max-width: 800px;
  height: 2px;
  background-color: rgb(102, 155, 188);
  border: none;
`
export const StyledInfo = styled.p`
  text-align: center;
  align-content: center;
  max-width: 800px;
  margin: auto;
  padding: 10px;
`