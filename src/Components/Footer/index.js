import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Socials from "../Socials"

const index = () => {
  return (
    <StyledFooter>
      <Socials />
      <div className="pages">
        <StyledLink>Contact</StyledLink>
        <StyledLink>Newsletter</StyledLink>
      </div>
      <div className="author">
        <a href="https://carbondesigned.com">Developed my Carbondesigned</a>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .pages {
    display: flex;
    flex-direction: column;
    padding: 0 0 1em 0;
  }

  .author {
    font-family: ${(p) => p.theme.fonts.secFont};
    padding: 1em 0;

    a {
      color: #000;
      text-decoration: none;
      &:hover {
        color: ${(p) => p.theme.colors.mainOrange};
      }
    }
  }
`

const StyledLink = styled(Link)`
  color: #000;

  &:hover {
    color: ${(p) => p.theme.colors.mainOrange};
  }
`

export default index
