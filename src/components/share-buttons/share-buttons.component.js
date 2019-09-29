import React from 'react'
import { Facebook } from 'react-social-sharing'
import { Twitter } from 'react-social-sharing'
import { Reddit } from 'react-social-sharing'
import { Tumblr } from 'react-social-sharing'
import { Pinterest } from 'react-social-sharing'
import { HackerNews } from 'react-social-sharing'
import { Mail } from 'react-social-sharing'
import { SocialLinksContainer } from './share-buttons.styles'

const IconStyle = { margin: '0px', borderRadios: '0px' }

const SocialButtons = ({ link, message }) => (
  <SocialLinksContainer>
    <Facebook solid small style={IconStyle} link={link} message={message} />
    <Twitter solid small style={IconStyle} message={message} link={link} />
    <Reddit solid small style={IconStyle} link={link} />
    <Tumblr solid small link={link} />
    <Pinterest solid small message={message} link={link} />
    <HackerNews solid small message={message} link={link} />
    <Mail solid small subject={message} link={link} />
  </SocialLinksContainer>
)

export default SocialButtons
