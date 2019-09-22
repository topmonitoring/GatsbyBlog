import styled from 'styled-components'
import style from 'styled-theming'

const getBackground = style.variants('mode', 'variant', {
  normal: {
    light: '#EEE',
    dark: '#EEE',
  },
  primary: {
    light: 'white',
    dark: 'pink',
  },
})

const Button = styled.button`
  background-color: ${getBackground};
  height: 40px;
  margin: auto 2px;
`

export default Button
