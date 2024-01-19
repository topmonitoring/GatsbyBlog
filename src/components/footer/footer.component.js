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
  StyledForm
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
      <StyledForm
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="5MY575CESZALS" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
    </StyledForm>
    </StyledFooterEnd>
  </StyledFooter>
)

export default Footer
