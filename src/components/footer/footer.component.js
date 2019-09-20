import React from 'react'
//import { SocialMediaLinksFooter } from '../social/social-media-links.component'
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
const Footer = () => (
  <StyledFooter>
    <StyledFooterGrid>
      <StyledFooterInfo>
        <h3>ABOUT THIS SITE</h3>
        <span>
          This site source code is available on{' '}
          <a
            href="https://github.com/topmonitoring/gatsbyCV"
            title="github link"
            target="blank"
          >
            GitHub
          </a>
          . Follow the link to see all the technologies behind this project and
          how to set it up for yourself. Creating beautiful sites take a lot of
          time and effort, feel free to donate to my hard work here.{' '}
        </span>
      </StyledFooterInfo>
      <StyledFooterSocials>
        <h3>FOLLOW ME</h3>
      </StyledFooterSocials>
      <div className="links">
        <h3>SECTIONS</h3>
      </div>
    </StyledFooterGrid>
    <StyledFooterEnd>
      Created by{' '}
      <b>
        <a href="https://github.com/topmonitoring" target="blank">
          <strong> Dobrin Dobrev</strong>
        </a>
      </b>{' '}
      © {new Date().getFullYear()} Powerd by Gatsby and GRAFCMS{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      Logo by{' '}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </StyledFooterEnd>
  </StyledFooter>
)

export default Footer
