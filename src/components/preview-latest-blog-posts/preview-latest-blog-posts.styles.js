import styled from 'styled-components'

import { Link } from 'gatsby'

export const StyledLatestBlogPostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 65vw;
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`
export const PreviewLatestBlogPostsTitle = styled.h1`
  margin: auto;
  text-align: center;
  font-weight: 800;
`
