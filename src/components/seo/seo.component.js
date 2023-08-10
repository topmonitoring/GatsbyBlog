import React from 'react'
import { useSiteMetadata } from "./use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, author, keywords,image} = useSiteMetadata()

  const seo={
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    //url: `${siteUrl}${pathname || ``}`,
  }
  return (
    <>
    <html lang="en" />
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="og:title" content={seo.title} />
    <meta name="og:description" content={seo.description} />
    <meta name="keywords" content={keywords} />
    <meta name="og:type" content={'website'} />
    <meta name="twitter:image" content={seo.image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={author} />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:description" content={seo.description} />
    <link rel="icon" content={seo.image} />
    {children}
    </>
  )
}
