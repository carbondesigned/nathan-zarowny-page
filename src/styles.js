import { Link } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import AkiraExpanded from "./Assets/font/Akira-Expanded-Demo.otf"

export const Styles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }

    @font-face {
    font-family: 'Akira Expanded';
    src: url(${AkiraExpanded});
    }


    body {
        font-family: 'Akira Expanded';
        overflow-y: scroll;
    }
`

export const HeadlineTitle = styled.h2`
  font-size: clamp(1.5em, 4vw, 4.5em);
  transition: 300ms;
`

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}
const StyledButton = styled(Link)`
  background-color: white;
  color: black;
  padding: 1em 2em;
  text-decoration: none;
`
