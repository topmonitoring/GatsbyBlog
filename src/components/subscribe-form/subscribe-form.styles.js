import styled from 'styled-components'
import { getBackgroundForArticlePreview } from '../theme/colors'

export const StyledHeroContent=styled.div`
  position: relative;
  display:flex;
  flex-direction: row;
  h1{
    font-size: 40px;
  }
  p{
    text-align: start;
    padding: 0px 45px;
  }
  span{
    
  }
`

export const StyledBackgroundSection = styled.div`
  width: 100%;
  height: 600px;
  background-color: transparent;
  margin-top: 30px;
  margin-bottom: 30px;
  display: grid;
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 20px 0px;
    flex-direction: column;
    height: fit-content;
  }
`

export const SubscribeInfo = styled.div`
  //color:black;
  width: 550px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${getBackgroundForArticlePreview};
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    width: 60vw;
    margin: auto;
  }
`
export const StyledFutures = styled.div`
display: flex;
flex-direction: column;
padding: 30px 5px;
 span{
    padding: 0px 45px;
    text-align: justify;
    font-size: larger;
    font-weight: 800;
  }
    
`

export const StyledInputContainer = styled.div`
  display: flex;
  height: 35px;
  flex-direction: row;
  padding: 5px;
  background-color: white;
  border-radius: 40px;
  svg{
    padding: 2px;
  }
  @media screen and (max-width: 800px) {
    width: 60vw;
    margin: auto;
  }
`

export const StyledSubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  //width: 500px;
  padding: 0px 30px;
  @media screen and (max-width: 800px) {
    width: 60vw;
    padding: 0px;
    margin: auto;
  }
`
export const StyledInput = styled.input`
  width: 450px;
  margin: 5px auto;
  padding: 10px;
  border: none;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const StyledButton = styled.button`
  width: 200px;
  height: 100%;
  margin: auto;
  padding: 1px;
  border: none;
  background-image: none;
  background-color: #dd0505;
  color: white;
  transition: all 0.1s linear;
  border-radius: 40px;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
  @media screen and (max-width: 800px) {
    margin: auto;
    width: auto;
  }
`
