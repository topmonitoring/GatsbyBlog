import styled from 'styled-components'

import { Link } from 'gatsby'

export const StyledLatestBlogPostsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 80vw;
  border-radius: 10px;
  article {
    height: 400px;
    margin: 35px;
    flex: 0 0 calc(33% - 69px);

    @media screen and (max-width: 800px) {
      flex: 0 0 calc(100% - 33px);
      font-size: 12px;
      margin: 30px auto;
    }
  }
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`
export const PreviewLatestBlogPostsTitle = styled.h1`
  margin: auto;
  text-align: center;
  font-weight: 800;
`
export const SeeAllBlogPosts = styled(Link)`
  text-align: center;
  background-color: #dd0505;
  color: white;
  margin: auto;
  display: flex;
  padding: 10px 30px;
  width: 55px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 100px;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
