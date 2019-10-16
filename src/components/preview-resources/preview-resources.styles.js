import styled from 'styled-components';
import {getBoxShadow, getBackgroundForArticlePreview} from '../theme/colors';
import {Link} from 'gatsby';

export const StyledTitle = styled.h1`
  margin: auto;
  text-align: center;
`;
export const StyledSection = styled (Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 250px;
  width: 22%;
  background-color: ${getBackgroundForArticlePreview};
  display: flex;
  margin: auto;
  box-shadow: 10px 11px 21px -5px ${getBoxShadow};
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 10px 11px 21px -5px aqua;
  }
  @media screen and (max-width: 800px) {
    width:70vw;
    margin:20px auto;
  }
`;
export const StyledSectionContainer = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: row;
  align-content: center;
  width: 80vw;
  padding-bottom: 50px;
  @media screen and (max-width: 800px) {
    flex-direction:column;
  }
`;
export const StyledIcon = styled.i`
  font-size: 60px;
`;
