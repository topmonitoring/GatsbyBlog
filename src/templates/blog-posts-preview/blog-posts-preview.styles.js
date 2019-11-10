import styled from 'styled-components'
import { getBackgroundForBlogPostsPreview } from '../../components/theme/colors'

export const StyledPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  width: 65vw;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`
