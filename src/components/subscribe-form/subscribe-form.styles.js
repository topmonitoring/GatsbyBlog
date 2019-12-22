import styled from 'styled-components'
import { getBackgroundForArticlePreview } from '../theme/colors'

export const SubscribeInfo = styled.div`
  width: 250px;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${getBackgroundForArticlePreview};
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    width: 60vw;
    margin: auto;
  }
`
export const StyledSubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  @media screen and (max-width: 800px) {
    width: 60vw;
    padding: 0px 30px;
    margin: auto;
  }
`
export const StyledInput = styled.input`
  width: 350px;
  margin: 5px 0px;
  padding: 1rem 1.5rem;
  border: none;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const StyledButton = styled.button`
  width: 150px;
  padding: 1rem 1.5rem;
  border: none;
  background-image: none;
  background-color: #dd0505;
  color: white;
  letter-spacing: 1px;
  transition: all 0.1s linear;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
  @media screen and (max-width: 800px) {
    margin: auto;
  }
`
