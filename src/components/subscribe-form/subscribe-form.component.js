import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  StyledSubscribeForm,
  StyledInput,
  StyledButton,
  SubscribeInfo,
  StyledInputContainer,
  StyledFutures
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
        <h1>Gain a competitive edge</h1>
        <p>
        


Receve high-quality information directly to your inbox. Sharpen your expertise, embrace challenges, and always remember that you're not merely working- you're sculpting a digital tomorrow! 
        </p>
        <StyledFutures>
        <span>✅ Weekly email newsletters</span>
        <span>✅ Highest quality exsipiance proven information</span>
        <span>✅ Acess to free ebooks</span>          
        </StyledFutures>
        <StyledSubscribeForm onSubmit={handleSubmit} aria-label="subscribe form">
        <StyledInputContainer>
        <StyledInput
          aria-label="input email"
          placeholder="Enter your email"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <StyledButton type="submit">Subscribe</StyledButton>
        </StyledInputContainer>
      </StyledSubscribeForm>
      </SubscribeInfo> 
    </StyledSubscribeContainer>
  )
}

export default EmailSubscribeForm
