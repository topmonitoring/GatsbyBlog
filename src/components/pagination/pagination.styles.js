import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  getBackgroundForBlogPostsPreview,
  getGlobalForeground,
} from '../theme/colors'

export const StyledLink = styled(Link)`
  background: ${getBackgroundForBlogPostsPreview};
  color: ${getGlobalForeground};
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  margin: 0 4px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px,
    rgba(39, 44, 49, 0.03) 1px 3px 8px;
  border-radius: 6px;
  margin-bottom: 5px;
  min-width: 50px;

  &.active {
    -webkit-box-shadow: inset 3px 0px 0px 0px darkgrey;
    -moz-box-shadow: inset 3px 0px 0px 0px darkgrey;
    box-shadow: inset 3px 0px 0px 0px darkgrey;
  }

  &:hover:not(.active) {
    background-color: #ddd;
  }

  &:hover {
    text-decoration: none;
  }
`

export const StyledNav = styled.nav`
  text-align: center;
  padding: 20px;
  div {
    display: inline-block;
  }
`
