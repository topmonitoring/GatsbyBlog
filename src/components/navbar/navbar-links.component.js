import React from 'react'
import { Link } from 'gatsby'

const NAV_ITEMS = ['About', 'Contact', 'Books', 'Blog']

const NavbarLinks = () => (
  <>
    <li key="home">
      <Link to={`/`}>Home</Link>
    </li>
    {NAV_ITEMS.map(navItem => (
      <li key={navItem}>
        <Link to={`/${navItem.toLowerCase()}`}>{navItem}</Link>
      </li>
    ))}
  </>
)

export default NavbarLinks
