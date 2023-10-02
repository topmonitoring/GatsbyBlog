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
        My Name is
        <b>
        <a href="https://github.com/topmonitoring" target="blank">
          <strong> Dobrin Dobrev</strong>
        </a>
      </b> and the mission of my life is to make education avilable to anyone who needs it by helping them achive their optimal 
        physical and mental potential, fostering a healthier life and a brighter future 
        for both themselves and humanity as a whole.
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
