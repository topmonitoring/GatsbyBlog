import styled from "styled-components";
import { Link } from 'gatsby'

export const StyledTag=styled(Link)`
-webkit-flex: 30px 1;
text-align: center;
background-color: turquoise;
text-decoration: none;
padding: 10px;
border-radius: 3px;
width: fit-content;
margin: 5px;
height: 20px;
max-width: fit-content;
cursor: pointer;
&:hover {
    transform: translateY(-5px);
    transition-duration: 0.6s;
    box-shadow: 0px 11px 30px 0px aqua;
  }
`
export const StyledGoldenTag=styled(Link)`
-webkit-flex: 30px 1;
text-align: center;
background-color: gold;
color: black;
text-decoration: none;
padding: 10px;
border-radius: 3px;
width: fit-content;
max-width: fit-content;
margin: 5px;
cursor: pointer;
&:hover {
    transform: translateY(-5px);
    transition-duration: 0.6s;
    box-shadow: 0px 11px 30px 0px gold;
  }
`

export const TagContainer=styled.div`
display: -webkit-flex;
-webkit-flex-direction: row;
-webkit-flex-wrap: wrap;
max-width: 600px;
height: auto;
margin: auto;
justify-content: center;
@media screen and (max-width: 1000px) {
      max-width: 400px;
    }
`