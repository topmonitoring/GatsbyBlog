import styled from 'styled-components'
import theme from 'styled-theming'

const getBackground = theme('mode', {
  light: '#D8DEE9  ',
  dark: '#2d3436 ',
})
const getForeground = theme('mode', {
  light: 'black',
  dark: 'white ',
})

//#2d3436 default black

export const StyledFooter = styled.footer`
  color: ${getForeground};
  align-content: center;
  fill-opacity: '0.7';
  background-color: ${getBackground};
`
export const StyledFooterEnd = styled.div`
  text-align: center;
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`
export const StyledFooterGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-areas: 'info socials links ';
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 50px;
  padding: 20px 200px 20px;
  align-content: center;
  @media screen and (max-width: 800px) {
    grid-gap: 20px;
    padding: 20px;
    h2 {
      font-size: 15px;
    }
  }
`
export const StyledFooterInfo = styled.div`
  grid-area: info;

  h3 {
    font-family: 'Montserrat', sans-serif;
  }
`
export const StyledFooterSocials = styled.div`
  grid-area: socials;

  h3 {
    font-family: 'Montserrat', sans-serif;
  }
  @media screen and (max-width: 800px) {
    div {
      width: 20px;
    }
  }
`
export const StyledFooterLinks = styled.div`
  grid-area: links;

  h3 {
    font-family: 'Montserrat', sans-serif;
  }
`
