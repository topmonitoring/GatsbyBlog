import React from 'react'
import { Link } from 'gatsby'

import {
  PreviewTitle,
  Tag,
  StyledDate,
  ArticleDisplayContainer,
  StyledPreviewImg,
  StyledDiscription,
  ArticleInnerGridContainer,
  TagContainer,
} from './preview-blog-post.styles'

const ArticlePreview = ({ article }) => (
  <ArticleDisplayContainer>
    <Link to={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
      <ArticleInnerGridContainer>
        <StyledPreviewImg alt="" fluid={article.heroImage.fluid} />
        <PreviewTitle>{article.title}</PreviewTitle>
        <StyledDate>{article.publishDate}</StyledDate>
        <StyledDiscription
          dangerouslySetInnerHTML={{
            __html: article.body.childMarkdownRemark.excerpt,
          }}
        />
        <TagContainer>
          {article.tags
            ? article.tags.map(tag => <Tag key={tag}>{tag}</Tag>)
            : null}
        </TagContainer>
      </ArticleInnerGridContainer>
    </Link>
  </ArticleDisplayContainer>
)
export default ArticlePreview
