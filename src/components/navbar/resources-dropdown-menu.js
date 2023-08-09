import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  getBackgroundForNavAndFooter,
  getGlobalBackground
} from '../theme/colors'

const Resources = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showMenu = () => {
    setIsOpen(!isOpen)
    document.removeEventListener('click', showMenu)
  }
  useEffect(() => {
    const listener=()=>{
      isOpen ? document.addEventListener('click', showMenu) : null
    };
    return()=>{                                             
      document.removeEventListener('click', listener) //we need this to prevent double mounting component listener @react18 version and above
    }
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
          <StyledLink to="/links">Links</StyledLink>
          <StyledLink to="/projects">Open Source Projects</StyledLink>
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
    background-color: ${getGlobalBackground};
    color: aqua;
  }
  i {
    float: right;
  }
`
const StyledDropdownMenu = styled.div`
border-style: ridge;
border-color:black;
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

const StyledNavLink = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  margin: 0px;
  transition: all 300ms linear 0s;
  text-decoration: none;
  cursor: pointer;
`
