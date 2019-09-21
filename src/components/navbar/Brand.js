import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logo from '../../../static/logo-min.png'

const Logo = () => (
  <Link to="/">
    <Image src={logo} alt="Company Logo" />
  </Link>
)

export default Logo

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: auto;
`
