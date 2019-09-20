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
} from './article-preview.styles'

const ArticlePreview = ({ article }) => (
  <ArticleDisplayContainer>
    <ArticleInnerGridContainer>
      <StyledPreviewImg alt="" fluid={article.heroImage.fluid} />
      <PreviewTitle>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </PreviewTitle>
      <StyledDate>{article.publishDate}</StyledDate>
      <StyledDiscription
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      {article.tags
        ? article.tags.map(tag => <Tag key={tag}>{tag}</Tag>)
        : null}
    </ArticleInnerGridContainer>
  </ArticleDisplayContainer>
)
export default ArticlePreview
