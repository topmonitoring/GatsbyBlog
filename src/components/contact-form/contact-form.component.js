import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import {
  StyledEmailInput,
  StyledFormGrid,
  StyledMassegeInput,
  StyledSubmitButton,
  StyledNameInput,
  StyledSelectInput,
} from './contact-form.styles'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const FormComponent = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = e => {
    e.persist()
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...inputs,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      action="/thankyou/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <StyledFormGrid>
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </div>

        <StyledNameInput
          aria-label="name input"
          type="text"
          name={'name'}
          onChange={handleChange}
          id={'name'}
          required={true}
          placeholder={'Your name'}
        />

        <StyledEmailInput
          aria-label="email input"
          type="email"
          name={'email'}
          onChange={handleChange}
          id={'email'}
          required={true}
          placeholder={'Your e-mail'}
        />
        <StyledSelectInput onChange={handleChange}>
          <option value="Thanks">What is your message about?</option>
          <option value="Thanks">I want to Hire you for a project</option>
          <option value="Thanks">I want to contribute</option>
          <option value="Thanks">Interview or media request</option>
          <option value="Thanks">
            Looking for help to grow my buisness/audiance
          </option>
          <option value="Thanks">Looking for general advice</option>
          <option value="Thanks">Just want to say Thank You</option>
          <option value="Thanks">Other</option>
        </StyledSelectInput>
        <StyledMassegeInput
          type="text"
          aria-label="message input"
          name={'message'}
          onChange={handleChange}
          id={'message'}
          required={true}
          placeholder={'Message'}
        />

        <StyledSubmitButton type="submit">Send</StyledSubmitButton>
      </StyledFormGrid>
    </form>
  )
}

export default FormComponent
