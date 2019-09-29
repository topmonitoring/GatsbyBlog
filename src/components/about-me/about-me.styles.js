import styled from 'styled-components'
import Img from 'gatsby-image'

export const StyledAboutSection = styled.div`
  display: flex;
  flex-direction: row;
`
export const StyledAboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 50px;
  width: 60vw;
`
export const StyledImg = styled(Img)`
  height: 600px;
  width: 500px;
  float: right;
  margin: 50px;
`
export const StyledName = styled.h3`
  text-align: center;
`
