import styled from 'styled-components'
import {
  getBackgroundForBlogPostsPreview,
  getGlobalForeground,
} from '../theme/colors'
import { SearchBox, Hits, Highlight } from 'react-instantsearch-dom'

export const StyledSearchResults = styled.div`
  width: 600px;
  margin: 2px auto;
  padding: 0px 5px;
  background-color: ${getBackgroundForBlogPostsPreview};
  @media screen and (max-width: 800px) {
    width: 80vw;
    margin: 2px auto;
  }
`
export const StyledHighlight = styled(Highlight)`
  font-size: 20px;
  font-weight: 800;
`
export const StyledHits = styled(Hits)`
  ul {
    list-style-type: none;
    padding: 0px;
  }
`

export const StyledInput = styled(SearchBox)`
  form {
    display: flex;
    flex-direction: row;
    input {
      margin: auto;
      height: 30px;
      width: 400px;
      font-size: 15px;
      outline-width: 0px;
      border-radius: 10px;
      background-color: ${getBackgroundForBlogPostsPreview};
      color: ${getGlobalForeground};
      border: 1px solid #ddd;
      @media screen and (max-width: 800px) {
        width: 80vw;
      }
    }
    button {
      display: none;
    }
  }
`

export const StyledLabel = styled.label`
  margin: auto;
`
export const StyledSearchContainer = styled.div`
  align-content: center;

  padding: 20px;
`
