import React from 'react'
import { Link } from 'gatsby'
import Resources from './resources-dropdown-menu'
import styled from 'styled-components'
import { getGlobalForeground } from '../theme/colors'

const NAV_ITEMS = ['About', 'Contact', 'Blog']

const NavbarLinks = ({ isFooter }) => (
  <>
    <div>
      <StyledNavLink to={`/`} key="home">
        Home
      </StyledNavLink>
    </div>
    {NAV_ITEMS.map(navItem => (
      <div key={navItem}>
        <StyledNavLink to={`/${navItem.toLowerCase()}`}>
          {navItem}
        </StyledNavLink>
      </div>
    ))}
    {isFooter ? null : <Resources />}
  </>
)

export default NavbarLinks

const StyledNavLink = styled(Link)`
  color: ${getGlobalForeground};
  //min-width: 45px;
  //text-transform: uppercase;
  //font-weight: 600;
  border-bottom: 1px solid transparent;
  margin: 0px auto;
  transition: all 300ms linear 0s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: rgb(102, 155, 188);
  }
`
