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
        <h1>About</h1>
        <span>
        Hi ,There I am
        <b>
        <a href="https://github.com/topmonitoring" target="blank">
          <strong> Dobrin Dobrev</strong>
        </a>
      </b> and the mission of this blog is: To help companies and individuals grow , offer more value, and make life better, healthier and brighter for everyone.We believe in action, better world is out there, all you need to do is choose it.
        </span>
      </StyledFooterInfo>
      <StyledFooterSocials>
        <h1>Social Media</h1>
        <SocialMediaLinks />
      </StyledFooterSocials>
      <div>
        <h1>Pages</h1>
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
