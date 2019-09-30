import styled from 'styled-components'
import {
  getBackgroundForBlogPostsPreview,
  getGlobalForeground,
} from '../theme/colors'

export const StyledInput = styled.input`
  margin: auto;
  height: 30px;
  width: 400px;
  font-size: 15px;
  outline-width: 0px;
  border-radius: 10px;
  padding: 2px 5px;
  display: flex;
  background-color: ${getBackgroundForBlogPostsPreview};
  color: ${getGlobalForeground};
  border: 1px solid #ddd;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`

export const StyledLabel = styled.label`
  margin: auto;
`
export const StyledSearchContainer = styled.div`
  align-content: center;

  padding: 20px;
`
