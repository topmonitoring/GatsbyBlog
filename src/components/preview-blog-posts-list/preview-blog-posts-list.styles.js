import styled from 'styled-components'
import theme from 'styled-theming'

const getBackground = theme('mode', {
  light: '#fff',
  dark: '#2E3440',
})

export const StyledPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin: auto;
  max-width: 1180px;
  background-color: ${getBackground};
`
