import styled from 'styled-components'
import { animated } from 'react-spring'
import { Link } from 'gatsby'

export const AnimatedButton = styled(animated.div)`
  margin: 5px auto;
  background: linear-gradient(0deg, rgb(0, 48, 73) 0%, rgb(102, 155, 188) 100%);
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
  transition: all 0.6s ease-in-out;
  &:hover {
    box-shadow: 0px 11px 30px 0px rgb(102, 155, 188);
    transform: scale(1.1);
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
