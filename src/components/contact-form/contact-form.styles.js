import styled from 'styled-components'

export const StyledFormGrid = styled.div`
  text-align: center;
  margin: auto;
  width: 40%;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'name email'
    'message message'
    'button button';
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`

export const StyledNameInput = styled.input`
  grid-area: name;
  width: 100%;
`
export const StyledEmailInput = styled.input`
  grid-area: email;
  width: 100%;
`
export const StyledMassegeInput = styled.textarea`
  grid-area: message;
  width: 100%;
`
export const StyledSubmitButton = styled.button`
  grid-area: button;
  height: 100%;
  width: 100%;
  border: none;
  background-color: transparent;
`
