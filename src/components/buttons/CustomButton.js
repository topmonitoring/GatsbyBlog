import React from 'react'
import { AnimatedButton, StyledLink } from './CustomButtonStyles'

const CustomButton = ({ children, to }) => {
  return (
    <StyledLink to={to}>
      <AnimatedButton>{children}</AnimatedButton>
    </StyledLink>
  )
}

export default CustomButton
