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
          <StyledLink to="/books">
            <i className="fas fa-book"></i> Books{' '}
          </StyledLink>
          <StyledLink to="/links">
            <i className="fas fa-link"></i> Links
          </StyledLink>
          <StyledLink to="/projects">
            {' '}
            <i className="fas fa-project-diagram"></i> Open Source Projects{' '}
          </StyledLink>
          <StyledLink to="/downloads">
            <i className="fas fa-download"></i>
            Downloads{' '}
          </StyledLink>
        </StyledDropdownMenu>
      ) : null}
    </div>
  )
}
export default Resources

const StyledLink = styled(Link)`
  width: 100%-20px;
  height: 100%;
  font-size: 16px;
  padding: 10px;
  text-decoration: none;
  &:hover {
    background-color: ${getBackgroundForBlogPost};
    color: aqua;
  }
  i {
    float: right;
  }
`
const StyledDropdownMenu = styled.div`
  width: 250px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${getBackgroundForNavAndFooter};
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
  a {
    text-align: start;
  }
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
