import styled from 'styled-components'

export const StyledPrevNextContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  text-align: center;
`
export const StyledArrow = styled.div`
  font-size: 18px;
  margin: auto;
  display: flex;
  flex-direction: column;
  a {
    transition: all 0.4s ease-in-out;
    font-weight: 500;
    cursor: pointer;
    :hover {
      color: aqua;
      transform: scale(1.1);
    }
  }
`
