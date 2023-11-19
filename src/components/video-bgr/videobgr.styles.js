import styled from 'styled-components';
import {getGlobalForeground} from '../../components/theme/colors'

export const StyledVideo = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: auto;
  height: 65vh;
  overflow: hidden;
  video {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1000px) {
    video{
      height: 100%;
    }
    }
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
div{
  margin: 5px;
}
@media screen and (max-width: 600px) {
  flex-direction: column;
    }
`

export const StrongWord = styled.b`
  //font-size:50px;
  color: rgb(102, 155, 188);
  
`;

export const HederOverlay = styled.div`
  height: 65vh;
  position: absolute;
  top: 110px;
  left: 0;
  width: 100vw;
  z-index: 0.5;
  background: black;
  opacity: 0.7;
  width: 100%;
`;

export const StyledLine =styled.hr`
margin: 0;
height: 5px;
background-color: ${getGlobalForeground};
border: none;
`

export const HederTextContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;
  color: whitesmoke;
  margin: 10rem auto;
  text-align: center;
  p{
    max-width: 550px;
    margin: auto;
    font-size: large;
  }
  h1{
    font-size:55px;
    max-width: 550px;
    margin: auto;
  }
  h2{
    font-size: 20px;
  }
  @media screen and (max-width: 1040px) {
      margin: 10px auto;
    }
`;

