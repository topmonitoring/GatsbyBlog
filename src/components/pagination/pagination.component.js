import React,{useState,useEffect} from 'react'
import { StyledNav, StyledLink } from './pagination.styles'

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const [prevPage, setPrevPage] = useState(currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString())
  const [nextPage,setNextPage] = useState(`/blog/${currentPage + 1}`)

  return (
    <StyledNav>
      <div>
        {!isFirst && (
          <StyledLink to={prevPage} rel="prev">
            {/* << symbol */}
            {String.fromCharCode(171)}
          </StyledLink>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <StyledLink
            key={`pagination-number${i + 1}`}
            className={i + 1 === currentPage ? 'active' : ''}
            to={`/blog/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </StyledLink>
        ))}

        {!isLast && (
          <StyledLink to={nextPage} rel="next">
            {/* >> symbol */}
            {String.fromCharCode(187)}
          </StyledLink>
        )}
      </div>
    </StyledNav>
  )
}

export default Pagination
