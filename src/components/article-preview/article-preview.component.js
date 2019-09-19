import React from 'react'
import { Link } from 'gatsby'

import {
  PreviewTitle,
  Tag,
  ArticleContainer,
  StyledPreviewImg,
  StyledDiscription,
} from './article-preview.styles'

const ArticlePreview = ({ article }) => (
  <ArticleContainer>
    <StyledPreviewImg alt="" fluid={article.heroImage.fluid} />
    <PreviewTitle>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </PreviewTitle>
    <small>{article.publishDate}</small>
    <StyledDiscription
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags ? article.tags.map(tag => <Tag key={tag}>{tag}</Tag>) : null}
  </ArticleContainer>
)
export default ArticlePreview
