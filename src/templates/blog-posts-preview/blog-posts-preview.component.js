import React from 'react'
import ArticlePreview from '../../components/preview-blog-post/preview-blog-post.component'
import { graphql } from 'gatsby'
import { StyledPreview,StyledHeding,StyledInfo } from './blog-posts-preview.styles'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../../components/layout/layout.component'
import Pagination from '../../components/pagination/pagination.component'
import TagLabel from '../../components/tags/tag.component'

const PostsPreview = props => {
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <StyledHeding>Grab to your hat</StyledHeding>
      <StyledInfo>Don't miss out on all the treasure trove of programming knowledge we have in store for you.</StyledInfo>
      <TagLabel></TagLabel>
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
  site {
    siteMetadata {
      title
    }
  }
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
