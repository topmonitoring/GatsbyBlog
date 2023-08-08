import React from 'react'
import { Link } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

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

function checkIsGold(article){if(article.tags && article.tags.includes('gold')){  return 'gold' }else  return 'normal'};

const ArticlePreview = ({ article }) => (
  <ArticleDisplayContainer variant={checkIsGold(article)}>
    <Link to={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
      <ArticleInnerGridContainer>
        <StyledPreviewImg alt="" image={getImage(article.heroImage)} />
        <PreviewTitle>{article.title}</PreviewTitle>
        <StyledDate>{article.publishDate}</StyledDate>
        <StyledDiscription>
        {article.body.childMarkdownRemark.excerpt}
          </StyledDiscription>
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
