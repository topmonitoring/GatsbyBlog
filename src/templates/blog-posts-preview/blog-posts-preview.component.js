import React, { useState } from 'react'
import ArticlePreview from '../../components/preview-blog-post/preview-blog-post.component'
import { graphql } from 'gatsby'
import { StyledPreview,StyledHeding,StyledInfo,StyledHR } from './blog-posts-preview.styles'
import get from 'lodash/get'
import Layout from '../../components/layout/layout.component'
import Pagination from '../../components/pagination/pagination.component'
import TagLabel from '../../components/tags/tag.component'
import { SEO } from '../../components/seo/seo.component'

export const Head = () => (
  <SEO />
)

const PostsPreview = props => {
  const posts = get(props, 'data.allContentfulBlogPost.edges')

  return (
    <Layout location={props.location}>
      <StyledHeding>Make a coffe and chill</StyledHeding>
      <StyledInfo>There are lots of information in here, that has the potential to change your life. To turn your potential into reality, we encourage readers to practice while consuming information to increase retainability and make progress. Remember the work works on you, while you work on it. You are not an object you are a process.</StyledInfo>
      <StyledHR/>
      <TagLabel />
      <StyledHR/>
      <StyledPreview>
        {posts.map(({ node }) => {
          return <ArticlePreview article={node} key={node.slug} />
        })}
      </StyledPreview>
      <Pagination
        currentPage={props.pageContext.currentPage}
        numPages={props.pageContext.numPages}
      />
    </Layout>
  )
}

export default PostsPreview

export const pageQuery = graphql`
query GetBlogPostsForPagePAGEQUERY($skip: Int!, $limit: Int!) {
  allContentfulBlogPost(sort: {publishDate: DESC}, limit: $limit, skip: $skip) {
    edges {
      node {
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        tags
        heroImage {
          gatsbyImageData
        }
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
}

`
