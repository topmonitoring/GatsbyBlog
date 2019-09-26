import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout/layout.component'
import { BlogPostBody, PostBagroundImg } from './blog-post.styles'
import { DiscussionEmbed } from 'disqus-react'

const BlogPostTemplate = props => {
  const post = get(props, 'data.contentfulBlogPost')
  const slug = get(props, 'data.contentfulBlogPost.slug')
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const baseURL = 'https://pure-water.netlify.com/'
  const fullURL = baseURL + slug
  console.log(fullURL)
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title: post.title, url: fullURL },
  }

  return (
    <Layout location={props.location}>
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <PostBagroundImg alt={post.title} fluid={post.heroImage.fluid} />
      <BlogPostBody>
        <h1>{post.title}</h1>
        <p>{post.publishDate}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </BlogPostBody>
      <DiscussionEmbed {...disqusConfig} />
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
      slug
      title
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
