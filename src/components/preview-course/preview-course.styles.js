import styled from 'styled-components'
import { animated } from 'react-spring'
import {GatsbyImage} from 'gatsby-plugin-image'


export const AnimatedCard = styled(animated.div)`
  flex-direction: row;
  width: 400px;
  height: 250px;
  background: aqua;
  margin: 5px;
  cursor: pointer;
  will-change: transform;

  &:hover {
    animation: transform;
  }
`
export const Bgr = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
`

export const CardTagName = styled.div`
  background-color: aqua;
  width: 250px;
  height: 30px;
  position: relative;
  margin: auto;
  top: 200px;
  color: black;
  text-align: center;
  clip-path: polygon(100% 0, 90% 50%, 100% 100%, 0% 100%, 10% 50%, 0 0);
`
