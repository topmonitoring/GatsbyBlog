import styled from 'styled-components'
import { getBackgroundForArticlePreview } from '../theme/colors'

export const StyledSubscribeContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${getBackgroundForArticlePreview};
  align-content: center;
  display: flex;
  margin-bottom: 30px;
`
export const StyledSubscribeForm = styled.form`
  margin: auto;
  text-align: center;
`
export const StyledInput = styled.input`
  width: 350px;
  padding: 1rem 1.5rem;
  border: none;
  @media screen and (max-width: 800px) {
    width: 70vw;
  }
`
export const StyledButton = styled.button`
  display: inline-block;

  padding: 1rem 1.5rem;
  border: none;
  background-image: none;
  background-color: #dd0505;
  color: white;

  letter-spacing: 1px;
  transition: all 0.1s linear;

  &:hover {
    cursor: pointer;
    background: darken(#dd0505, 15%);
  }
`
