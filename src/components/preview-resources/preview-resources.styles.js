import styled from 'styled-components'
import { getBoxShadow, getBackgroundForArticlePreview,getGlobalForeground } from '../theme/colors'
import { Link } from 'gatsby'

export const StyledTitle = styled.h1`
  margin: auto;
  text-align: center;
`
export const StyledSection = styled(Link)`
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 200px;
  width: 30%;
  background-color: ${getBackgroundForArticlePreview};
  display: flex;
  margin: auto;
  box-shadow: 0px 11px 20px 0px ${getBoxShadow};
  transition: all 0.4s ease-in-out;
  svg{
    fill:${getGlobalForeground};
    margin: 10px auto;
  }
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 11px 30px 0px rgb(102, 155, 188);
  }
  @media screen and (max-width: 800px) {
    width: 70vw;
    margin: 20px auto;
  }
`
export const StyledSectionContainer = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: row;
  align-content: center;
  width: 65vw;
  padding-bottom: 50px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
