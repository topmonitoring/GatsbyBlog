import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout/layout.component'
import {
  BlogPostBody,
  PostBagroundImg,
  StyledHeder,
  StyledDate,
  StyledContentBody,
  StyledComentSection,
} from './blog-post.styles'
import { DiscussionEmbed } from 'disqus-react'
import SocialButtons from '../../components/share-buttons/share-buttons.component'
import PrevNextButtons from '../../components/prev-next-buttons/prev-next-buttons.component'
import ReadingProgress from 'react-reading-progress'

const BlogPostTemplate = props => {
  const post = get(props, 'data.contentfulBlogPost')
  const slug = get(props, 'data.contentfulBlogPost.slug')
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const baseURL = 'https://pure-water.netlify.com/'
  const fullURL = baseURL + slug
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title: post.title, url: fullURL },
  }

  return (
    <Layout location={props.location}>
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <ReadingProgress targetEl="#target-el" />
      <PostBagroundImg alt={post.title} fluid={post.heroImage.fluid} />
      <BlogPostBody id="target-el">
        <StyledHeder>{post.title}</StyledHeder>
        <StyledDate>{post.publishDate}</StyledDate>
        <StyledContentBody
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </BlogPostBody>
      <SocialButtons link={fullURL} message={post.title} />
      <PrevNextButtons {...props.pageContext} />
      <StyledComentSection>
        <DiscussionEmbed {...disqusConfig} />
      </StyledComentSection>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      heroImage {
        fluid(maxWidth: 1920, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
