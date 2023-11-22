import React from 'react'
import Layout from '../components/layout/layout.component'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { getBackgroundForBlogPostsPreview } from '../components/theme/colors'
import { SEO } from '../components/seo/seo.component'

export const Head = () => (
  <SEO title="Work page"/>
)

const WorkPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
    <Layout location={props.location}>
      <StyledSection>
        <h1>Landing pages</h1>
        <div>
          comming soon...
        </div>
        <h1>AI chatbots</h1>
        <div>
        comming soon...
        </div>
        <h1>Media</h1>
        <div>
        comming soon...
        </div>
      </StyledSection>
    </Layout>
  )
}

export default WorkPage

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
