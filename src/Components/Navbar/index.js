import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Sidebar from "../Sidebar"

const index = ({ toggle }) => {
  return (
    <StyledNav>
      <div className="logo">
        <h2>Nathan Zarowny</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link>Newsletter</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggle}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  color: white;

  .logo {
    font-size: clamp(0.75em, 3vw, 1.2em);
  }

  .hamburger {
    width: 1.5em;
    height: 1.25em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;

    .line {
      background-color: white;
      width: 100%;
      height: 3px;
      border-radius: 10em;
    }
  }

  .nav-links {
    display: none;
    font-family: ${(p) => p.theme.fonts.secFont};

    @media screen and (min-width: 768px) {
      display: flex;
    }
  }
`

export default index
