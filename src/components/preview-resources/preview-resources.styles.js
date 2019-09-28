import styled from 'styled-components'

export const StyledTitle = styled.h1`
  margin: auto;
  text-align: center;
`
export const StyledSection = styled.div`
  height: 300px;
  width: 30%;
  background-color: aqua;
  display: flex;
  margin: auto;
  -webkit-box-shadow: 10px 11px 21px -5px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 10px 11px 21px -5px rgba(0, 0, 0, 0.47);
  box-shadow: 10px 11px 21px -5px rgba(0, 0, 0, 0.47);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
export const StyledSectionContainer = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: row;
  align-content: center;
  width: 80vw;
  padding-bottom: 50px;
`
