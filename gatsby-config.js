const { cloneWith } = require('lodash')

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
    'Contentful spaceId and the access token need to be provided.'+process.env.ALGOLIA_API_KEY
  )
}

const MyQuery = `{
  allContentfulBlogPost {
    edges {
      node {
        id
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
    image: `/favicons/pirate.png`,
    keywords: [
      'pirate cactus',
      'piratecactus',
      'Pirate Cactus',
      'blog',
      'developer',
      'buisiness',
      'programmer',
    ],
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pirate Cactus`,
        short_name: `Pirate Cactus`,
        start_url: `/`,
        icon: `static/favicons/pirate.png`,
        cache_busting_mode: 'none',
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
          workboxConfig: {
            globPatterns: ['static/favicons/pirate.png']
          }
      }
    },
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
        plugins: [{
          resolve: `gatsby-remark-vscode`,
          options: {
            theme: 'Abyss' // Or install your favorite theme from GitHub
          },
          //resolve: `gatsby-remark-responsive-iframe`,
        }]
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
