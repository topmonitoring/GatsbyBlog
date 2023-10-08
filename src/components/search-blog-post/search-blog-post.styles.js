import styled from 'styled-components'
import {
  getBackgroundForBlogPostsPreview,
  getBackgroundForBlogPost,
  getBackgroundForNavAndFooter,
  getGlobalForeground,
  getBackgroundForSearchBoxHover,
} from '../theme/colors'
import { SearchBox, Hits, Highlight } from 'react-instantsearch-dom'

export const StyledDiscription = styled.p`
  font-size: 16px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`
export const StyledNotFound = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 20px 5px;
`

export const StyledSearchLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  span {
    font-size: 20px;
  }
`

export const StyledHighlightTitle = styled(Highlight)`
  font-size: 22px;
  font-weight: 800;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
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
      margin: 5rem auto;
      padding: 1rem;
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

export const StyledResultsContainer = styled.div`
  width: 700px;
  position: absolute;
  z-index: 9999;
  background-color: ${getBackgroundForNavAndFooter};
  left: 0;
  right: 0;
  margin-top: 3px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    width: 82vw;
  }
`
export const StyledSearchResult = styled.div`
  width: 600px;
  margin: 2px auto;
  padding: 10px 15px;
  border-radius: 5px;
  :hover {
    background-color: ${getBackgroundForSearchBoxHover};
  }
  @media screen and (max-width: 800px) {
    width: 80vw;
    margin: 2px auto;
  }
`

export const StyledSearchContainer = styled.div`
  align-content: center;
  padding: 20px;
`
