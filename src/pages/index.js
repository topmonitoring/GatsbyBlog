import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout/layout.component'
import PreviewCourses from '../components/preview-courses/preview-courses.component'
import Resources from '../components/preview-resources/preview-resources.component'
import LatestBlogPosts from '../components/preview-latest-blog-posts/preview-latest-blog-posts.component'
import EmailSubscribeForm from '../components/subscribe-form/subscribe-form.component'
import Slideshow from '../components/slideshow/slideshow.component'
import VideoBaground from '../components/video-bgr/videobgr.component'
import { SEO } from '../components/seo/seo.component'
import AnauncmentBanner from '../components/anouncment-banner/anouncment-banner.component'

export const Head = () => (
  <SEO />
)
const RootIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={props.location}>
      <AnauncmentBanner/>
      <VideoBaground/>
      {/*<Slideshow />*/}
      <LatestBlogPosts />
      {/*<PreviewCourses />*/}
      <Resources />
      <EmailSubscribeForm />
    </Layout>
  )
}

export default RootIndex


export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
