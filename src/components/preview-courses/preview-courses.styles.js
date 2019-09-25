import styled from 'styled-components'
import { animated } from 'react-spring'

export const AnimatedCard = styled(animated.div)`
  flex-direction: row;
  width: 400px;
  height: 250px;
  background: aqua;
  margin: 5px;
  cursor: pointer;
  will-change: transform;
  &:hover {
    background: hotpink;
  }
`

export const AnimatedCardContainer = styled.div`
  width: 80vw;
  display: flex;
  margin: auto;
  padding: 50px;
`
