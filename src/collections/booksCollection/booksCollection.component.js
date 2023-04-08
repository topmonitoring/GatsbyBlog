import React from 'react';
import {BooksGrid,Book,StyledBookTitle,StyledBookImg,StyledBookContent,LinkToAmazonButton} from "./booksCollection.styles"
import {getImage} from "gatsby-plugin-image"

const BookCollection =({books})=>{
return(
    <BooksGrid>
    {books.map(({title, img, description, amazonLink },index) => {
      return (
        <Book key={index}>
          <StyledBookTitle>{title}</StyledBookTitle>
          <StyledBookImg image={getImage(img)} alt={title}/>
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
)
}

export default BookCollection