import styled from 'styled-components'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

export const StyledAwesomeSlider = styled(AutoplaySlider)`
  width: 100vw;
  height: 795px;
  position: absolute;
  left: 0px;
  top: -75px;
  background-repeat: no-repeat;
  z-index: 0;
  margin-bottom: 50px;
  /*nav {
    bottom: 5px;
    z-index: 2;
  } */
  @media screen and (max-width: 800px) {
    height: 79vh;
  }
`
