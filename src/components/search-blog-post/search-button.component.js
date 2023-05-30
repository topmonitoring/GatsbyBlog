import React, { useState} from 'react'
import styled from 'styled-components'
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
      fill: "#fff",
      width: "50px",
      height: "50px",
      padding: "25px"
    }
  };

const SearchButton =({children})=>{
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
    return(
      <>
      <StyledButton onClick={onOpenModal} >
      <StyledSearchButtonL viewBox="0 0 24 24" width="24px" height="24px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></StyledSearchButtonL>
      <StyledSearchButtonD viewBox="0 0 24 24" width="24px" height="24px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></StyledSearchButtonD>
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


const StyledSearchButtonL = styled.svg`
  width: 24px;
  height: 24px;
  fill: black;
  display: ${getDispleyDark};
`
const StyledSearchButtonD = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
  display: ${getDispleyLight};
`
const StyledButton = styled.button`
  background-color: transparent;
  height: 40px;
  margin: auto 2px;
  cursor: pointer;
  border: none;
`;

