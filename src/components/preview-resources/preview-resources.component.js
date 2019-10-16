import React from 'react'
import {
  StyledSection,
  StyledTitle,
  StyledSectionContainer,
  StyledIcon,
} from './preview-resources.styles'

const Resources = () => {
  return (
    <>
      <StyledTitle>Free resources</StyledTitle>
      <StyledSectionContainer>
        <StyledSection to="/books">
          <h3>Books</h3>
          <StyledIcon className="fas fa-book" />
        </StyledSection>
        <StyledSection to="/links">
          <h3>Links</h3>
          <StyledIcon className="fas fa-link" />
        </StyledSection>
        <StyledSection to="/projects">
          <h3>Open Source Projects</h3>
          <StyledIcon className="fas fa-project-diagram" />
        </StyledSection>
        <StyledSection to="/downloads">
          <h3>Downloads</h3>
          <StyledIcon className="fas fa-download" />
        </StyledSection>
      </StyledSectionContainer>
    </>
  )
}
export default Resources
