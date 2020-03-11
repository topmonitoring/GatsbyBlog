import React from 'react'
import Layout from '../components/layout/layout.component'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { getBackgroundForBlogPostsPreview } from '../components/theme/colors'

const ProjectsPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <StyledSection>
        <div>
          You can find all my projects on my portfolio website{' '}
          <a href="https://dobrindobrev.io">dobrindobbrev.io</a>
        </div>
        <div>
          or on my github profile{' '}
          <a href="https://github.com/topmonitoring">topmonitoring</a>
        </div>
      </StyledSection>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsQuery {
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
