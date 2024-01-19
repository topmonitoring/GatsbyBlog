import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import {getImage} from 'gatsby-plugin-image'
import Layout from '../../components/layout/layout.component'
import {
  BlogPostBody,
  PostBagroundImg,
  StyledHeder,
  StyledDate,
  StyledContentBody,
  StyledComentSection,
  StyledReadTime,
  StyledContainer,
} from './blog-post.styles'
import { DiscussionEmbed } from 'disqus-react'
import SocialButtons from '../../components/share-buttons/share-buttons.component'
import PrevNextButtons from '../../components/prev-next-buttons/prev-next-buttons.component'
import EmailSubscribeForm from '../../components/subscribe-form/subscribe-form.component'
import { SEO } from '../../components/seo/seo.component'

export const Head = props => {
  const postTitle = get(props, 'data.contentfulBlogPost.title')
  return(
  <SEO title={`${postTitle}`}/>
)}

const BlogPostTemplate = props => {
  const post = get(props, 'data.contentfulBlogPost')
  const slug = get(props, 'data.contentfulBlogPost.slug')
  const baseURL = 'https://dobrindobrev.com/'
  const fullURL = baseURL +'blog/'+ slug
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title: post.title, url: fullURL },
  }
  let cont = post.body.childMarkdownRemark.html
  cont = cont.replace(/<[^>]*>/g, ' ')
  cont = cont.replace(/\s+/g, ' ')
  cont = cont.trim()
  const n = cont.split(' ').length

  let Holetime = n / 200
  let minTime = Math.floor(Holetime)
  let secTime = (Holetime % 1) * 0.6
  if (secTime >= 0.3) {
    minTime += 1
  }
  const ReadTime = minTime + ' min read'

  return (
    <Layout location={props.location}>
      <PostBagroundImg alt={post.title} image={getImage(post.heroImage)} />
      <BlogPostBody >
        <StyledHeder>{post.title}</StyledHeder>
        <StyledContainer>
          <StyledDate>{post.publishDate}</StyledDate>/
          <StyledReadTime>{ReadTime}</StyledReadTime>
        </StyledContainer>
        <StyledContentBody dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html}}/>
      </BlogPostBody>
      <SocialButtons link={fullURL} message={post.title} />
      <StyledComentSection>
        <DiscussionEmbed {...disqusConfig} />
      </StyledComentSection>
      <EmailSubscribeForm />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    slug
    publishDate(formatString: "MMMM DD, YYYY")
    heroImage {
      gatsbyImageData
    }
    body {
      childMarkdownRemark {
        html
      }
    }
  }
}
`
