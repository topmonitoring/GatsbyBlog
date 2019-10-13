import React from 'react'
import { Link } from 'gatsby'
import {
  StyledPrevNextContainer,
  StyledArrow,
} from './prev-next-buttons.styles'

const PrevNextButtons = ({ previous, next }) => {
  return (
    <StyledPrevNextContainer>
      {previous && (
        <StyledArrow>
          Read Previous:
          <Link to={`blog/${previous.slug}`}>&#8249;-{previous.title} </Link>
        </StyledArrow>
      )}
      {next && (
        <StyledArrow>
          Read Next: <Link to={`blog/${next.slug}`}>{next.title} -&#8250;</Link>
        </StyledArrow>
      )}
    </StyledPrevNextContainer>
  )
}
export default PrevNextButtons
