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
        <StyledSection>
          <h3>Books</h3>
          <i style={{ fontSize: '60px' }} class="fas fa-book"></i>
        </StyledSection>
        <StyledSection>
          <h3>Links</h3>
          <i style={{ fontSize: '60px' }} class="fas fa-link"></i>
        </StyledSection>
        <StyledSection>
          <h3>Open Source Projects</h3>
          <i style={{ fontSize: '60px' }} class="fas fa-project-diagram"></i>
        </StyledSection>
        <StyledSection>
          <h3>Downloads</h3>
          <i style={{ fontSize: '60px' }} class="fas fa-download"></i>
        </StyledSection>
      </StyledSectionContainer>
    </>
  )
}
export default Resources
