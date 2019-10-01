import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from 'styled-theming'

const NAV_ITEMS = ['About', 'Contact', 'Blog']

const NavbarLinks = () => (
  <>
    <li key="home">
      <StyledNavLink to={`/`}>Home</StyledNavLink>
    </li>
    {NAV_ITEMS.map(navItem => (
      <li key={navItem}>
        <StyledNavLink to={`/${navItem.toLowerCase()}`}>
          {navItem}
        </StyledNavLink>
      </li>
    ))}
  </>
)

export default NavbarLinks

const getForeground = theme('mode', {
  light: 'black',
  dark: 'white ',
})

const StyledNavLink = styled(Link)`
  color: ${getForeground};
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  margin: 0px auto;
  transition: all 300ms linear 0s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: aqua;
    border-bottom: 1px solid aqua;
  }
`
