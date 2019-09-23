import styled from 'styled-components'
import { animated } from 'react-spring'

export const AnimatedCard = styled(animated.div)`
  flex-direction: row;
  width: 20vw;
  height: 300px;
  background: aqua;
  margin: 5px;
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
