import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Sidebar from "../Sidebar"
import Socials from "../Socials"
import PromoBanner from "../PromoBanner"

const index = ({ toggle }) => {
  return (
    <>
      <PromoBanner />
      <StyledNav>
        <div className="logo">
          <StyledLink to="/">
            <h2>Nathan Zarowny</h2>
          </StyledLink>
        </div>
        <ul className="nav-links">
          <li>
            <StyledLink to="/contact" className="contact-cta">
              Contact
            </StyledLink>
          </li>
          {/* <li>
          <StyledLink to="/newsletter" className="newsletter-cta">
            Newsletter
          </StyledLink>
        </li> */}
          <li>
            <Socials />
          </li>
        </ul>

        <div className="hamburger" onClick={toggle}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </StyledNav>
    </>
  )
}

const StyledNav = styled.nav`
  width: 100%;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 3em;
  color: white;
  z-index: 10;

  .logo {
    font-size: clamp(0.75em, 3vw, 1.2em);
    white-space: nowrap;
  }

  .nav-links {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      padding: 1em;
    }

    .contact-cta {
      background-color: white;
      border: 0.2em solid white;
      color: black;
      padding: 1em 2em;
      font-weight: 700;
      font-size: 0.75em;
    }

    .newsletter-cta {
      border: 0.2em solid white;
      padding: 1em 2em;
      transition: 300ms;
      font-size: 0.75em;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }

  a {
    color: white;
    padding: 0;
  }

  .hamburger {
    width: 2em;
    height: 1.75em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;

    @media screen and (min-width: 1040px) {
      display: none;
    }

    .line {
      background-color: white;
      width: 100%;
      height: 3px;
      border-radius: 10em;
    }
  }

  .nav-links {
    display: none;

    @media screen and (min-width: 1040px) {
      display: flex;
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
`

export default index
