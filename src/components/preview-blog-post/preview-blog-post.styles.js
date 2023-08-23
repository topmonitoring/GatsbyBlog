import styled,{css} from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import { getBackgroundForArticlePreview, getBoxShadow,getGlobalBackground } from '../theme/colors'
import React from 'react'

export const StyledPreviewImg = styled(GatsbyImage)`
  display: block;
  width: 100%;
  height: 250px;
  grid-area: img;
  border-radius: 10px 10px 0px 0px;
`
export const StyledDate = styled.div`
  grid-area: date;
`
export const StyledDiscription = styled.p`
  margin: 2px 10px;
  font-size: 17px;
  grid-area: discription;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`
export const PreviewTitle = styled.h1`
  position: absolute;
  width: 70%;
  height: 50px;
  font-size: 17px;
  margin-top: 190px;
  color: black;
  grid-area: 'title';
  clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0 100%, 0 0);
  text-align: center;
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
  
`
export const Tag = styled.p`
  width: fit-content;
  height: 18px;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #a0a0a0;
  margin: 2px;
  background-color: grey;
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
  grid-area: tag;
`

export const ArticleInnerGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    'img img img'
    'title title title'
    'discription discription discription '
    'tag tag date';
`

const normalVariantArticle = css`
  background-color: ${getBackgroundForArticlePreview};

  h1{
    background-color: aqua;
  }
  &:hover {
    box-shadow: 0px 11px 30px 0px aqua;
  }
`;

const goldVariantArticle = css`
  background-color: gold;
  p,div{
    color: black;
  }
  h1{
    background-color: gold;
  }
  
  &:hover {
    box-shadow: 0px 11px 30px 0px gold;
  }
`;

const articleVariants = {
  normal: normalVariantArticle,
  gold: goldVariantArticle,
};

export const ArticleDisplayContainer = styled(({ variant = "normal", ...props }) => <article {...props} />)`
  height: 400px;
  min-width: 365px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 20px;
  flex: 0 0 calc(20% - 40px);
  transition: all 0.4s ease-in-out;
  box-shadow: 0px 11px 20px 0px ${getBoxShadow};
  ${({ variant }) => articleVariants[variant]}
  &:hover {
    transform: translateY(-5px);
    h1 {
    width:100%;
    clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100% ,0 100%, 5% 50%);
    color: dimgray;
  }
  }
  @media screen and (max-width: 1870px) {
    flex: 0 0 calc(50% - 66px);
    font-size: 12px;
    min-width: 250px;
  }
  @media screen and (max-width: 1250px) {
    flex: 0 0 calc(100% - 33px);
    font-size: 12px;
    min-width: 250px;
  }
  
`