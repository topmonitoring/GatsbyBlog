import React from 'react'
import { StyledAwesomeSlider } from './slideshow.styles'
import Slide1 from './slide01'
import Slide2 from './slide02'
import Slide3 from './slide03'
const Slideshow = () => (
  <StyledAwesomeSlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div>
      <Slide1 />
    </div>
    <div>
      <Slide2 />
    </div>
    <div>
      <Slide3 />
    </div>
  </StyledAwesomeSlider>
)
export default Slideshow
