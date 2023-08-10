import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
        keywords 
        image
      }
    }
  }
  `)

  return data.site.siteMetadata
}