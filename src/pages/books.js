import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout.component'
import styled from 'styled-components'

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
  const audioblePick = get(
    props,
    'data.contentfulBooksPage.audioblePick.childMarkdownRemark.html'
  )
  const books = get(props, 'data.contentfulBooksPage.books')
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <StyledTitle>{pageTitle}</StyledTitle>
      <PickGrid>
        <StyledPick
          dangerouslySetInnerHTML={{
            __html: audioblePick,
          }}
        />
        <StyledDiscription
          dangerouslySetInnerHTML={{
            __html: pageInfo,
          }}
        />
      </PickGrid>
      <BooksGrid>
        {books.map(({ title, imgLink, description, amazonLink }) => {
          return (
            <Book key={title}>
              <h3>{title}</h3>
              <StyledBookImg
                dangerouslySetInnerHTML={{
                  __html: imgLink.childMarkdownRemark.html,
                }}
              />
              <StyledBookContent
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
              <a href={amazonLink} target="blank">
                <LinkToAmazonButton>Get it on Amazon</LinkToAmazonButton>
              </a>
            </Book>
          )
        })}
      </BooksGrid>
      <StyledDiscription
        dangerouslySetInnerHTML={{
          __html: pageDisclaimer,
        }}
      />
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
      audioblePick {
        childMarkdownRemark {
          html
        }
      }

      books {
        title
        imgLink {
          childMarkdownRemark {
            html
          }
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
const StyledDiscription = styled.div`
  text-align: left;
  margin: 50px auto;
  width: 60%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 85%;
  }
`
const BooksGrid = styled.div`
  text-align: center;
  width: 70%;
  display: grid;
  flex-direction: row;
  margin: auto;
  grid-template-areas: 'book book';
  @media screen and (max-width: 800px) {
    grid-template-areas:
      'book'
      'book';
    width: 80%;
  }
`
const Book = styled.div`
  text-align: center;
  margin: 10px auto;
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    grid-template-areas: 'book';
  }
`
const LinkToAmazonButton = styled.button`
  text-align: center;
  width: 60%;
  height: 40px;
  background-color: red;
  color: white;
  cursor: pointer;
`
const PickGrid = styled.div`
  text-align: center;
  width: 70%;
  display: flex;
  flex-direction: row;
  margin: auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 80%;
  }
`
const StyledPick = styled.div`
  margin: 50px auto;
`
const StyledBookContent = styled.div`
  text-align: center;
  margin: 20px auto;
  width: 60%;
  height: 180px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 85%;
  }
`
const StyledBookImg = styled.div`
  text-align: center;
  margin: 20px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 85%;
  }
`
