import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import styled from 'styled-components'
import { getBackgroundForBlogPostsPreview } from '../components/theme/colors'
import BooksColection from '../collections/booksCollection/booksCollection.component'
import {GatsbyImage,getImage} from "gatsby-plugin-image"

const BooksPage = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const pageTitle = get(props, 'data.contentfulBooksPage.title')
  const pageInfo = get(
    props,
    'data.contentfulBooksPage.info.childMarkdownRemark.html'
  )
  const pageDisclaimer = get(
    props,
    'data.contentfulBooksPage.disclaimer.childMarkdownRemark.html'
  )
  const audiobleLogo = get(
    props,
    'data.contentfulBooksPage.audiobleLogo'
  )
  const books = get(props, 'data.contentfulBooksPage.books')
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <StyledSection>
        <StyledTitle>{pageTitle}</StyledTitle>
        <PickGrid>
        <StyledAudiobleLogo image={getImage(audiobleLogo) }  />
          <StyledDiscription
            dangerouslySetInnerHTML={{
              __html: pageInfo,
            }}
          />
        </PickGrid>
        <BooksColection books={books}/>
        <StyledDiscription
          dangerouslySetInnerHTML={{
            __html: pageDisclaimer,
          }}
        />
      </StyledSection>
    </Layout>
  )
}

export default BooksPage

export const pageQuery = graphql`
  query BooksQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBooksPage {
      title
      info {
        childMarkdownRemark {
          html
        }
      }
      audiobleLogo {
        gatsbyImage(width:200,height:200)
    }
      books {
        title
        img{
          gatsbyImage(width: 160, height: 250)
        }
        amazonLink
        description {
          childMarkdownRemark {
            html
          }
        }
      }
      disclaimer {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
const StyledTitle = styled.h1`
  text-align: center;
  margin: auto;
`
const StyledAudiobleLogo=styled(GatsbyImage)`
align-self: center;
width: 250px;
height: 250px;
margin-top: 40px;
`

const StyledDiscription = styled.div`
  text-align: left;
  margin: 50px auto;
  width: 90%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 85%;
  }
`
const PickGrid = styled.div`
  text-align: center;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 80%;
  }
`
const StyledPick = styled.div`
  margin: 50px;
`
const StyledSection = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${getBackgroundForBlogPostsPreview};
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
  }
`

