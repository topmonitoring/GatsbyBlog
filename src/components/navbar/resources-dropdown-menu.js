import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  getBackgroundForNavAndFooter,
  getBackgroundForBlogPost,
} from '../theme/colors'

const Resources = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showMenu = () => {
    setIsOpen(!isOpen)
    document.removeEventListener('click', showMenu)
  }
  useEffect(() => {
    isOpen ? document.addEventListener('click', showMenu) : null
  }, [isOpen])

  return (
    <div>
      <StyledNavLink onClick={showMenu}>
        Resources {isOpen ? <>&#9650;</> : <>&#9660;</>}{' '}
        {/*returns up and down arrow strings*/}
      </StyledNavLink>
      {isOpen ? (
        <StyledDropdownMenu>
          <StyledLink to="/books">Books</StyledLink>
          <StyledLink to="/books">Links</StyledLink>
          <StyledLink to="/books">Open Source Projects </StyledLink>
          <StyledLink to="/books"> Downloads </StyledLink>
        </StyledDropdownMenu>
      ) : null}
    </div>
  )
}
export default Resources

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: ${getBackgroundForBlogPost};
  }
`
const StyledDropdownMenu = styled.div`
  width: 250px;
  height: 200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${getBackgroundForNavAndFooter};
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
`

const StyledNavLink = styled.a`
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  margin: 0px;
  transition: all 300ms linear 0s;
  text-decoration: none;
  cursor: pointer;
`
