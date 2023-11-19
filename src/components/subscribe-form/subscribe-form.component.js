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
        Receive high-quality information directly to your inbox. Sharpen your expertise, embrace challenges, and always remember that you're not merely working- you're sculpting a digital tomorrow!
        </p>
        <StyledFutures>
        <span>✅ Acess to free ebooks</span>
        <span>✅ Weekly email newsletters</span>
        <span>✅ Highest quality exsipiance proven information</span>       
        </StyledFutures>
        <StyledSubscribeForm onSubmit={handleSubmit} aria-label="subscribe form">
        <StyledInputContainer>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><title>EMAIL</title><path d="M123.25,24.192c0-.018,0-.034-.005-.052s-.007-.063-.009-.094a1.734,1.734,0,0,0-.083-.408c-.006-.018,0-.037-.011-.055s-.01-.015-.013-.023a1.734,1.734,0,0,0-.227-.407c-.021-.028-.043-.053-.066-.08a1.755,1.755,0,0,0-.31-.294c-.012-.009-.022-.02-.034-.028a1.744,1.744,0,0,0-.414-.2c-.034-.012-.068-.022-.1-.032a1.733,1.733,0,0,0-.474-.073H6.5a1.733,1.733,0,0,0-.474.073c-.035.01-.068.02-.1.032a1.744,1.744,0,0,0-.414.2c-.012.008-.022.019-.034.028a1.755,1.755,0,0,0-.31.294c-.022.027-.045.052-.066.08a1.734,1.734,0,0,0-.227.407c0,.008-.01.015-.013.023s-.005.037-.011.055a1.734,1.734,0,0,0-.083.408c0,.032-.009.063-.009.094s-.005.034-.005.052v79.615c0,.023.006.045.007.068a1.737,1.737,0,0,0,.019.188c.008.051.015.1.027.152a1.74,1.74,0,0,0,.056.179c.017.047.033.094.054.139a1.729,1.729,0,0,0,.093.172c.024.04.048.081.075.119a1.743,1.743,0,0,0,.125.152c.033.036.066.072.1.106.021.019.037.042.059.061s.036.017.052.03a1.736,1.736,0,0,0,.452.263c.035.014.071.022.107.033a1.732,1.732,0,0,0,.488.085c.012,0,.023.006.035.006l.023,0H121.478l.023,0c.012,0,.023-.006.034-.006a1.732,1.732,0,0,0,.489-.085c.035-.011.07-.019.1-.033a1.736,1.736,0,0,0,.453-.263c.016-.013.036-.017.052-.03s.038-.042.059-.061c.036-.034.069-.069.1-.106a1.743,1.743,0,0,0,.125-.152c.027-.038.051-.078.075-.119a1.729,1.729,0,0,0,.093-.172c.021-.045.037-.092.054-.139a1.74,1.74,0,0,0,.056-.179c.012-.05.019-.1.027-.152a1.737,1.737,0,0,0,.019-.188c0-.023.007-.045.007-.068ZM45.8,60.316,62.858,74.993a1.751,1.751,0,0,0,2.283,0L82.2,60.316l35.512,41.741H10.289ZM8.25,99.052V28.007l34.9,30.026Zm76.6-41.019,34.9-30.026V99.052Zm31.931-32.091L81.276,56.493c-.006.005-.014.008-.02.014s-.012.014-.019.02L64,71.358,46.763,56.527c-.007-.006-.012-.014-.019-.02l-.02-.014L11.217,25.942Z"/></svg>
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
