import React from 'react'
import {
  StyledInput,
  StyledLabel,
  StyledSearchContainer,
} from './search-blog-post.styles'

const SearchBlogPost = () => {
  return (
    <StyledSearchContainer>
      <StyledLabel>
        <StyledInput id="inpt_search" type="text" placeholder="Search..." />
      </StyledLabel>
    </StyledSearchContainer>
  )
}
export default SearchBlogPost
