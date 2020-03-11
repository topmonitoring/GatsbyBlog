import React from 'react'
import Layout from '../components/layout/layout.component'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { getBackgroundForBlogPostsPreview } from '../components/theme/colors'

const LinksPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <StyledSection>
        <h3>Ui/UX</h3>
        <h3>javascript</h3>
        <h3>variable fonts</h3>
        <h3>tools</h3>
        <h3>free books</h3>
      </StyledSection>
    </Layout>
  )
}

export default LinksPage

export const pageQuery = graphql`
  query LinksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const StyledSection = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${getBackgroundForBlogPostsPreview};
  border-radius: 10px;
  text-align: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
  }
`
