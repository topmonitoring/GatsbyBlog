import styled from "styled-components";
import { Link } from 'gatsby'

export const StyledTag=styled(Link)`
background-color: turquoise;
padding: 5px;
border-radius: 3px;
width: fit-content;
margin: 3px;
cursor: pointer;
&:hover {
    transform: translateY(-5px);
    box-shadow: 0px 11px 30px 0px aqua;
  }
`
export const TagContainer=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`