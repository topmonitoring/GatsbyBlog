import styled from "styled-components";
import { Link } from 'gatsby'

export const StyledTag=styled(Link)`
background-color: turquoise;
padding: 5px;
border-radius: 3px;
width: fit-content;
margin: 3px;
cursor: pointer;
`
export const TagContainer=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`