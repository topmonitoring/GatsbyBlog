const Promise = require('bluebird')
const path = require('path')
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post/blog-post.js')
    const blogPostPreview = path.resolve(
      './src/templates/blog-posts-preview/blog-posts-preview.component.js'
    )
    const tagTemplate = path.resolve('src/templates/tags/tags.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(limit: 2000) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            tagsGroup: allContentfulBlogPost(limit: 2000) {
              group(field: tags) {
                fieldValue
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges

        // Create paginated index
        const postsPerPage = 10
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/blog' : `/blog/${i + 1}`,
            component: blogPostPreview,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })

        const tags = result.data.tagsGroup.group
        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          })
        })

        posts.forEach((post, index) => {
          const previous = index === 0 ? null : posts[index - 1].node
          const next = index === posts.length - 1 ? null : posts[index + 1].node
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}
