import styled from 'styled-components'
import { getBackgroundForBlogPostsPreview } from '../../components/theme/colors'

export const StyledPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin: auto;
  max-width: 55vw;
  background-color: ${getBackgroundForBlogPostsPreview};
  border-radius: 10px;
`
