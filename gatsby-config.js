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
    siteUrl: `https://pure-water.netlify.com`,
    title: `Pure Water`,
    description: `Hi there!!! My name is Dobrin Dobrev and I am a web developer, freelancer, and open source contributor. This is my personal site where you can see my latest projects, skills and what I'm up to. If you are starting a business and need some help with your website don't hesitate to contact me. I specialize in creating static websites which are super fast and easy to use with amazing designs, SEO friendly, work great on mobile and come with  FREE HOSTING by Netlify.`,
    author: `@iamdobri`,
    keywords: [
      'Dobrin',
      'Dobrin Dobrev',
      'developer',
      'freelancer',
      'programmer',
    ],
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
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
            title: 'Pure Water RSS Feed',
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
