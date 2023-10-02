import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  StyledSubscribeForm,
  StyledInput,
  StyledButton,
  SubscribeInfo,
} from './subscribe-form.styles'

import StyledSubscribeContainer from './subscribe-baground'

const EmailSubscribeForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(email, {
      FNAME: name,
    })
      .then(data => {
        alert(data.result)
      })
      .catch(error => {
        alert('A problem ocured while procesing your request')
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value)
  }
  const handleNameChange = e => {
    setName(e.currentTarget.value)
  }

  return (
    <StyledSubscribeContainer>
      <SubscribeInfo>
        <h1>Boost Your Performance</h1>
        <p>
        


Gain a competitive edge by receiving high-quality information directly to your inbox. Sharpen your expertise, embrace challenges, and always remember that you're not merely working- you're sculpting a digital tomorrow! 
        </p>
        <StyledSubscribeForm onSubmit={handleSubmit} aria-label="subscribe form">
        <StyledInput
          aria-label="input name"
          placeholder="first name"
          name="name"
          type="text"
          onChange={handleNameChange}
        />
        <StyledInput
          aria-label="input email"
          placeholder="email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <StyledButton type="submit">Subscribe</StyledButton>
      </StyledSubscribeForm>
      </SubscribeInfo> 
    </StyledSubscribeContainer>
  )
}

export default EmailSubscribeForm
