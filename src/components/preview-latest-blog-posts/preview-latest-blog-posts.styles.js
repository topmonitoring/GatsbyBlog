import styled from 'styled-components'
import { getBoxShadow } from '../theme/colors'

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
    transition: all 0.4s ease-in-out;
    box-shadow: 10px 11px 21px -5px ${getBoxShadow};
    &:hover {
      transform: scale(1.1);
    }
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
