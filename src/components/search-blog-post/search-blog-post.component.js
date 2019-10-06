import React, { useState } from 'react'
import {
  StyledInput,
  StyledResultsContainer,
  StyledSearchContainer,
  StyledSearchResult,
  StyledHits,
  StyledHighlightTitle,
  StyledDiscription,
  StyledNotFound,
} from './search-blog-post.styles'
import { Link } from 'gatsby'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Highlight,
  Configure,
  connectStateResults,
} from 'react-instantsearch-dom'
import SearchLogo from './search-logo.component'

const searchClient = algoliasearch(
  `ASRLVIQT09`,
  `fbb4d53973362ece715eaab2441bee7f`
)

const SearchBlogPost = () => {
  const [showResults, setShowResults] = useState(true)

  const handleChange = e => {
    e.preventDefault()
    const searchInput = e.target.value
    if (searchInput.length === 0) {
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  return (
    <StyledSearchContainer>
      <InstantSearch
        id="InstantSearch"
        searchClient={searchClient}
        indexName="Blog"
        style={{ margin: 'auto', width: '80vw' }}
      >
        <StyledInput onChange={handleChange} />
        <Configure hitsPerPage={6} />
        {showResults ? null : <Content />}
      </InstantSearch>
    </StyledSearchContainer>
  )
}
export default SearchBlogPost

const HitPreview = ({ hit }) => {
  return (
    <StyledSearchResult>
      <Link
        style={{ boxShadow: `none`, textDecoration: 'none' }}
        to={`/blog/${hit.slug}`}
      >
        <StyledHighlightTitle hit={hit} attribute="title" tagName="mark" />

        <small style={{ float: 'right' }}>
          {new Date(hit.publishDate).toLocaleDateString()}
        </small>
        <StyledDiscription>
          <Highlight
            hit={hit}
            attribute="body.childMarkdownRemark.excerpt"
            tagName="mark"
          />
        </StyledDiscription>
      </Link>
    </StyledSearchResult>
  )
}

const Content = connectStateResults(({ searchState, searchResults }) =>
  searchResults && searchResults.nbHits !== 0 ? (
    <StyledResultsContainer>
      <StyledHits hitComponent={HitPreview} />
      <SearchLogo />
    </StyledResultsContainer>
  ) : (
    <StyledResultsContainer>
      <StyledNotFound>
        No results has been found for {searchState.query}
      </StyledNotFound>
      <SearchLogo />
    </StyledResultsContainer>
  )
)
