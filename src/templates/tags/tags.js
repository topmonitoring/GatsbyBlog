import React from 'react'
import { graphql } from 'gatsby'
import ArticlePreview from '../../components/preview-blog-post/preview-blog-post.component'
import { StyledPreview,StyledHeding,StyledInfo } from '../blog-posts-preview/blog-posts-preview.styles'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../../components/layout/layout.component'
import Pagination from '../../components/pagination/pagination.component'
import TagLabel from '../../components/tags/tag.component'


const Tags = (props) => {
  const { tag } = props.pageContext
  const { totalCount } = props.data.allContentfulBlogPost
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
      <Layout location={location}>
      <Helmet title={siteTitle} />
      <StyledHeding>Make a coffe and chill</StyledHeding>
      <StyledInfo>There are lots of information in here, what matters most is what you do with it. We encourage readers to practice while consuming information to increase retainability and have somting to show and go back to.</StyledInfo>
      <TagLabel />
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
export default Tags

export const pageQuery = graphql`
  query($tag: String){
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      limit: 2000
      sort: {tags: DESC}
      filter: {tags: {in: [$tag]}}
    ) {
      totalCount
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
