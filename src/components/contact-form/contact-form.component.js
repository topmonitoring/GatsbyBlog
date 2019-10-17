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
  const [selectValue, setSelectValue] = useState('none selected')

  const handleSelectChange = e => {
    setSelectValue(e.target.value)
  }

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
        about: selectValue,
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
        <StyledSelectInput value={selectValue} onChange={handleSelectChange}>
          <option value="none selected">What is your message about?</option>
          <option value="I want to Hire you for a project">
            I want to Hire you for a project
          </option>
          <option value="I want to contribute">I want to contribute</option>
          <option value="Interview or media request">
            Interview or media request
          </option>
          <option value="Looking for help to grow my buisness/audiance">
            Looking for help to grow my buisness/audiance
          </option>
          <option value="Looking for general advice">
            Looking for general advice
          </option>
          <option value="Just want to say Thank You">
            Just want to say Thank You
          </option>
          <option value="Other">Other</option>
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
