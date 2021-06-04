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
  font-size: clamp(1.5em, 3.5vw, 3.5em);
`
