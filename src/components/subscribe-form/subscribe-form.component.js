import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  StyledSubscribeContainer,
  StyledSubscribeForm,
  StyledInput,
  StyledButton,
} from './subscribe-form.styles'

const EmailSubscribeForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(email)
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

  return (
    <StyledSubscribeContainer>
      <StyledSubscribeForm onSubmit={handleSubmit}>
        <h2>Subscribe to our newsletter!</h2>
        <div>
          <StyledInput
            placeholder="Email address"
            name="email"
            type="text"
            onChange={handleEmailChange}
          />
          <StyledButton type="submit">Subscribe</StyledButton>
        </div>
      </StyledSubscribeForm>
    </StyledSubscribeContainer>
  )
}

export default EmailSubscribeForm
