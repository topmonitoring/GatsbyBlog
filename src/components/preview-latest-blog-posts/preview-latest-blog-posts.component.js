import React from 'react'
import ArticlePreview from '../preview-blog-post/preview-blog-post.component'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  StyledLatestBlogPostsGrid,
  PreviewLatestBlogPostsTitle
} from './preview-latest-blog-posts.styles'
import CustomButton from '../buttons/CustomButton';

const LatestBlogPosts = () => {
  const data=useStaticQuery(graphql`
      query {
        allContentfulBlogPost(limit: 3, sort: {publishDate: DESC}) {
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
    `)
      const posts = data.allContentfulBlogPost.edges
      return (
        <>
          <PreviewLatestBlogPostsTitle>
            Latest Blog Posts
          </PreviewLatestBlogPostsTitle>
          <StyledLatestBlogPostsGrid>
            {posts.map(({ node }) => {
              return <ArticlePreview article={node} key={node.slug} />
            })}
          </StyledLatestBlogPostsGrid>

          <CustomButton to="/blog">See All</CustomButton>
        </>
      )
    }


export default LatestBlogPosts
