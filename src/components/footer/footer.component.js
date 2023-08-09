import React from 'react'
import SocialMediaLinks from '../social-links/social-links.component'
//import { NavListFooter } from '../navigation/navigation.component'
import {
  StyledFooter,
  StyledFooterEnd,
  StyledFooterGrid,
  StyledFooterInfo,
  StyledFooterLinks,
  StyledFooterSocials,
} from './footer.styles'

import './footer.styles.js'
import NavbarLinks from '../navbar/navbar-links.component'
const Footer = () => (
  <StyledFooter>
    <StyledFooterGrid>
      <StyledFooterInfo>
        <h1>ABOUT</h1>
        <span>
          This blog purpose is to educate users, allow programmers to discover
          practical solutions and new technologies in a fast and efficient whey.
          And also share their knowledge with each other.
        </span>
      </StyledFooterInfo>
      <StyledFooterSocials>
        <h1>SOCIAL MEDIA</h1>
        <SocialMediaLinks />
      </StyledFooterSocials>
      <div>
        <h1>PAGES</h1>
        <NavbarLinks isFooter={true} />
      </div>
    </StyledFooterGrid>
    <StyledFooterEnd>
      Created by{' '}
      <b>
        <a href="https://github.com/topmonitoring" target="blank">
          <strong> Dobrin Dobrev</strong>
        </a>
      </b>{' '}
      © {new Date().getFullYear()} Powerd by Gatsby and Contentfull{' '}
    </StyledFooterEnd>
  </StyledFooter>
)

export default Footer
