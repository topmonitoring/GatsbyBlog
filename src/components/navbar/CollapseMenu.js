import React from 'react'
import styled from 'styled-components'
import NavbarLinks from './navbar-links.component'
import { useSpring, animated } from 'react-spring'
import {
  getGlobalForeground,
  getBackgroundForNavAndFooter,
} from '../theme/colors'

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <NavbarLinks />
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  z-index: 2000;
  background: ${getBackgroundForNavAndFooter};
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  div {
    div {
      margin-top: 0px;
      & a {
        font-size: 16px;
      }
    }
  }

  & a {
    transition: all 300ms linear 0s;
  }

  a {
    font-size: 1.4rem;
    line-height: 2;
    color: ${getGlobalForeground};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    text-align: start;
  }
`
