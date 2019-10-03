import React, { useState, useEffect } from 'react'
import {
  StyledInput,
  StyledLabel,
  StyledSearchContainer,
  StyledSearchResults,
  StyledHits,
  StyledHighlight,
} from './search-blog-post.styles'
import { Link } from 'gatsby'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  `ASRLVIQT09`,
  `fbb4d53973362ece715eaab2441bee7f`
)

const SearchBlogPost = () => {
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {}, [])
  return (
    <StyledSearchContainer>
      <InstantSearch
        id="InstantSearch"
        searchClient={searchClient}
        indexName="Blog"
        style={{ margin: 'auto', width: '80vw' }}
      >
        <StyledInput />
        {showResults ? null : <StyledHits hitComponent={HitPreview} />}
      </InstantSearch>
    </StyledSearchContainer>
  )
}
export default SearchBlogPost

const HitPreview = ({ hit }) => {
  return (
    <StyledSearchResults>
      <Link
        style={{ boxShadow: `none`, textDecoration: 'none' }}
        to={`/blog/${hit.slug}`}
      >
        <StyledHighlight hit={hit} attribute="title" tagName="mark" />

        <small style={{ float: 'right' }}>
          {new Date(hit.publishDate).toLocaleDateString()}
        </small>
        <div>{hit.body.childMarkdownRemark.excerpt}</div>
      </Link>
    </StyledSearchResults>
  )
}
