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
    @media (max-aspect-ratio: 16/9) {
      width: auto;
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
`

export const HederOverlay = styled.div`
  height: 65vh;
  position: absolute;
  top: 80px;
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
  margin: 15rem auto;
  text-align: center;
  p{
    max-width: 600px;
    margin: auto;
    font-size: large;
  }
  
`;

