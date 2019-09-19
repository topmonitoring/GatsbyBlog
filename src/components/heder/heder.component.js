import React from 'react'

import { StyledLink, NavContainer } from './heder.styles'

const NAV_ITEMS = ['About', 'Contact', 'Books', 'Blog']

const Heder = () => (
  <NavContainer>
    <StyledLink to="/">HOME</StyledLink>
    {NAV_ITEMS.map(navItem => (
      <StyledLink key={navItem} to={`/${navItem.toLowerCase()}`}>
        {navItem}
      </StyledLink>
    ))}
  </NavContainer>
)

export default Heder
