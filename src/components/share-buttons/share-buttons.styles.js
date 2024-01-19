import styled from 'styled-components'

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 35%;

  a {
    margin: 5px;
    div {
      height: 30px;
      width: 30px;
      div {
        font-size: 30px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    position: relative;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 50px;
    width: 80vw;

    a {
      margin: 2px;
      div {
        height: 15px;
        width: 15px;
        div {
          font-size: 15px;
        }
      }
    }
  }
`
