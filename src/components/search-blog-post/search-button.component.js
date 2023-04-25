import React, {Children, useState} from 'react'
import styled,{css} from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import {getImage,GatsbyImage} from 'gatsby-plugin-image'
import theme from 'styled-theming'
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const getDispleyLight = theme('mode', {
  light: 'none',
  dark: 'inline',
})
const getDispleyDark = theme('mode', {
    light: 'inline',
    dark: 'none',
  })

  const styles = {
    modal: {
      backgroundColor: "transparent",
      boxShadow: "none",
      display: "flex",
      overflow: "none",
      width: "100%",
      padding: "0",
      margin: "0",
      height: "100%",
      minWidth: "100%",
      justifyContent: "center"
    },
    overlay: {
      backgroundColor: "#1cccc",
      padding: 0
    },
    closeIcon: {
      fill: "#fff"
    }
  };

const SearchButton =({children})=>{
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


    const imageData=useStaticQuery(graphql`
    {
      blackSearchIcon: file(name: {eq: "search-interface-symbol-b"}) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 24, height: 24)
        }
      }
      lightSearchIcon: file(name: {eq: "search-interface-symbol-w"}) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 24, height: 24)
        }
      }
    }
    `)
    return(
      <>
      <StyledButton onClick={onOpenModal} >
      <StyledSearchButtonD image={getImage(imageData.blackSearchIcon)} alt='serch icon' />
      <StyledSearchButtonL image={getImage(imageData.lightSearchIcon)} alt='serch icon' />
      </StyledButton>
      
      <Modal
      open={open}
      onClose={onCloseModal}
      styles={styles}
    >
      {children}
      </Modal>
      </> 
    )
}

export default SearchButton

const StyledSearchButtonL = styled(GatsbyImage)`
  display: ${getDispleyLight};
  width: 20px;
  height: 20px;
  align-content: center;
`
const StyledSearchButtonD = styled(GatsbyImage)`
  width: 20px;
  height: 20px;
  display: ${getDispleyDark};
`
const StyledButton = styled.button`
  width: 60px;
  height: 40px;
  margin: auto 2px;
  background:transparent;
  border: none;
  cursor: pointer;
  align-content: center;
`;

