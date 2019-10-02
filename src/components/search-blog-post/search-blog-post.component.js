import React from 'react'
import {
  StyledInput,
  StyledLabel,
  StyledSearchContainer,
} from './search-blog-post.styles'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  'ASRLVIQT09',
  'fbb4d53973362ece715eaab2441bee7f'
)

const SearchBlogPost = () => {
  return (
    <StyledSearchContainer>
      <StyledLabel>
        <StyledInput id="inpt_search" type="text" placeholder="Search..." />
      </StyledLabel>

      {/* <InstantSearch
        searchClient={searchClient}
        indexName="Blog"
        style={{ margin: 'auto', width: '80vw' }}
      >
        <SearchBox />
        <Hits />
     </InstantSearch>*/}
    </StyledSearchContainer>
  )
}
export default SearchBlogPost
