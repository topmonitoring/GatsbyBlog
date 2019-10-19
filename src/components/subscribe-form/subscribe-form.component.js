import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  StyledSubscribeContainer,
  StyledSubscribeForm,
  StyledInput,
  StyledButton,
  SubscribeInfo,
} from './subscribe-form.styles'

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
        <h2>Never miss a story!</h2>
        <span>
          Get all new blog posts directly in your inbox.No spam and easy
          unsubscribe.
        </span>
      </SubscribeInfo>
      <StyledSubscribeForm onSubmit={handleSubmit} aria-label="subscribe form">
        <StyledInput
          aria-label="input name"
          placeholder="First Name"
          name="name"
          type="text"
          onChange={handleNameChange}
        />
        <StyledInput
          aria-label="input email"
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <StyledButton type="submit">Subscribe</StyledButton>
      </StyledSubscribeForm>
    </StyledSubscribeContainer>
  )
}

export default EmailSubscribeForm
