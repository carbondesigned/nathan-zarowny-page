import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import Socials from "../Socials"

const index = ({ toggle, isOpen }) => {
  return (
    <StyledSidebar isOpen={isOpen} toggle={toggle}>
      <div className="close">
        <StyledFaTimes isOpen={isOpen} onClick={toggle} />
      </div>
      <ul className="sidebar-links">
        <li>
          <StyledLink onClick={toggle} to="/contact" className="contact-cta">
            Contact
          </StyledLink>
        </li>
        <li>
          <StyledLink
            onClick={toggle}
            to="/newsletter"
            className="newsletter-cta"
          >
            Newsletter
          </StyledLink>
        </li>
        <li>
          <Socials />
        </li>
      </ul>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  left: 0;
  z-index: 20;
  background-color: rgba(0, 2, 124, 0.75);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 300ms;

  .close {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding: 1em;
    font-size: 2em;
    background-color: #00037c;
  }

  .sidebar-links {
    display: flex;
    flex-direction: column;
    width: 100%;

    .contact-cta {
      background-color: white;
      color: black;
      padding: 1em 2em;
    }

    .newsletter-cta {
      border: 0.2em solid white;
      padding: 1em 2em;
      transition: 300ms;

      &:hover {
        background-color: white;
        color: black;
      }
    }

    li {
      list-style: none;
      padding: 2em;
      width: 100%;
    }
  }

  a {
    color: white;
    font-size: 1.2em;
  }
`

const StyledFaTimes = styled(FaTimes)`
  cursor: pointer;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
`

export default index
