import React from 'react'
import Layout from '../components/layout/layout.component'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { getBackgroundForBlogPostsPreview } from '../components/theme/colors'

const LinksPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const linksContent = get(
    props,
    'data.contentfulLinksPage.linksContent.childMarkdownRemark.html'
  )
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <StyledSection
        dangerouslySetInnerHTML={{ __html: linksContent }}
      ></StyledSection>
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
    contentfulLinksPage {
      linksContent {
        childMarkdownRemark {
          html
        }
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

  a {
    border-bottom: 3px solid #4799eb;
    text-decoration: none;
    :hover {
      color: #4799eb;
    }
  }
`
