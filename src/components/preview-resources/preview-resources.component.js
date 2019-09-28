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
        <StyledSection>Books</StyledSection>
        <StyledSection>Links</StyledSection>
        <StyledSection>Open Source Projects</StyledSection>
      </StyledSectionContainer>
    </>
  )
}
export default Resources
