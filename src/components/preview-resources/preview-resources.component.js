import React from 'react'
import {
  StyledSection,
  StyledTitle,
  StyledSectionContainer,
} from './preview-resources.styles'

const Resources = () => {
  return (
    <>
      <StyledTitle>Free resources</StyledTitle>
      <StyledSectionContainer>
        <StyledSection to="/books">
          <h3>Books</h3>
        </StyledSection>
        <StyledSection to="/links">
          <h3>Links</h3>
        </StyledSection>
        <StyledSection to="/projects">
          <h3>Open Source Projects</h3>
        </StyledSection>
      </StyledSectionContainer>
    </>
  )
}
export default Resources
