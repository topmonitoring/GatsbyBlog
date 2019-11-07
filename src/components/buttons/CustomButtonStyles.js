import styled from 'styled-components'
import { animated } from 'react-spring'
import { Link } from 'gatsby'

export const AnimatedButton = styled(animated.div)`
  margin: 5px auto;
  background: rgb(144, 186, 245);
  color: black;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 30px;
  text-decoration: none;
  width: 130px;
  text-align: center;
  border-radius: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    box-shadow: 0px 11px 30px 0px aqua;
    background: rgb(129, 164, 214);
  }

  @media screen and (max-width: 800px) {
    width: 150px;
    font-size: 12px;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: auto;
`
