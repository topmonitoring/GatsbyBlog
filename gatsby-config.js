require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

const MyQuery = `{
  allContentfulBlogPost {
    edges {
      node {
        slug
        title
        publishDate
        body {
          childMarkdownRemark
          {
            excerpt
          }
        }
      }
    }
  }
}`

const queries = [
  {
    query: MyQuery,
    transformer: ({ data }) =>
      data.allContentfulBlogPost.edges.map(({ node }) => node),
  },
]

module.exports = {
  siteMetadata: {
    siteUrl: `https://piratecactus.com`,
    title: `Pirate Cactus`,
    description: `Wellcome to Pitere Cactus, web development and antrepenurial heven for anyone who wants to inprove ,share or sharpen there programming skills.`,
    author: `@iamdobri`,
    keywords: [
      'pirate',
      'piratecactus',
      'Pirate Cactus',
      'blog',
      'developer',
      'freelancer',
      'programmer',
    ],
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAIL_CHIMP_FORM_ACTION,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.body.childMarkdownRemark.excerpt,
                  date: edge.node.publishDate,
                  url: site.siteMetadata.siteUrl + '/blog/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + '/blog/' + edge.node.slug,
                  custom_elements: [
                    {
                      'content:encoded':
                        edge.node.body.childMarkdownRemark.html,
                    },
                  ],
                })
              })
            },
            query: `
              {
                allContentfulBlogPost {
                  edges {
                    node {
                      slug
                      title
                      publishDate
                      body {
                        childMarkdownRemark
                        {
                          excerpt
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Pirate Cactus RSS Feed',
          },
        ],
      },
    },
    `gatsby-background-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
