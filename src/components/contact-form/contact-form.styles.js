import styled from 'styled-components'

export const StyledFormGrid = styled.div`
  margin: auto;
  width: 50%;
  padding: 20px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'name email'
    'select select'
    'message message'
    'button button';
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`
export const StyledSelectInput = styled.select`
  grid-area: select;
  font-size: 18px;
  width: 100%;
  padding: 1rem 10px;
`

export const StyledNameInput = styled.input`
  grid-area: name;
  font-size: 18px;
  width: 100%-5px;
  padding: 1rem 5px;
`
export const StyledEmailInput = styled.input`
  grid-area: email;
  font-size: 18px;
  width: 100%-5px;
  padding: 1rem 5px;
`
export const StyledMassegeInput = styled.textarea`
  grid-area: message;
  font-size: 18px;
  height: 150px;
  width: 100%-10px;
  padding: 1rem 5px;
`
export const StyledSubmitButton = styled.button`
  grid-area: button;
  height: 100%;
  width: 30%;
  border: none;
  padding: 1rem 5px;
  font-size: 18px;
  margin: auto;
  background-color: aqua;
  cursor: pointer;
`
